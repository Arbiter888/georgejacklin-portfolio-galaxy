import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text, type } = await req.json();
    
    // Customize the system message based on the type of text being enhanced
    const systemMessages = {
      project: "You are an expert at writing compelling project descriptions for portfolios. Enhance the text while maintaining its core message, making it more professional and engaging. Focus on highlighting technical achievements and business impact.",
      cv: "You are an expert at writing professional CV/resume entries. Enhance the text to be more impactful and achievement-oriented, using strong action verbs and quantifiable results where possible.",
      default: "You are a professional content enhancer. Improve the text while maintaining its core message, making it more engaging and professional."
    };

    const systemMessage = systemMessages[type] || systemMessages.default;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: `Please enhance this text: ${text}` }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const enhancedText = data.choices[0].message.content;

    return new Response(JSON.stringify({ enhancedText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in enhance-text function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});