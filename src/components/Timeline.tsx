import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Education } from "./Education";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";

const timelineItems = [
  {
    year: "2022 - Present",
    title: "Director & Fractional Product Manager",
    company: "Multiplier Ltd",
    description: "Leading a boutique management consultancy specializing in product strategy for Pre-Seed to Series A startups. Provide hands-on fractional product management and strategic advisory services, helping founders optimize their product-market fit and achieve scalable growth. Notable achievements include developing comprehensive product roadmaps, reducing customer acquisition costs by up to 40%, and successfully guiding multiple startups through international market expansion. Expertise spans social gaming, hospitality tech, and metaverse platforms, with particular focus on US market entry strategies and sustainable revenue model development.",
  },
  {
    year: "2021 - 2022",
    title: "Chairman & CEO",
    company: "Emerge (Metaverse Venture Studio)",
    description: "Led development of pixel-streamed metaverse environments using Unreal Engine. Secured pre-seed and seed funding, developed $EMERGE tokenomics, and managed a cross-functional team of 10. Reduced operational costs by 40% through strategic offshore team establishment.",
  },
  {
    year: "2021",
    title: "Product Manager",
    company: "Space Metaverse",
    description: "Conducted user research across established and decentralized metaverse platforms. Built strategic partnerships with NFT artists and played a key role in securing $7M in venture capital funding. Featured in CoinDesk.",
  },
  {
    year: "2019 - 2020",
    title: "Digital Transformation Consultant",
    company: "Benares Restaurant and Bar",
    description: "Implemented comprehensive digital transformation strategy achieving 365% ROI within 100 days. Increased organic social reach by 68,000 with 47,000 interactions. Generated £10,000 in Chef Masterclass sales with 5.65x ROI.",
  },
  {
    year: "2018 - 2019",
    title: "Product Onboarding & Partnerships Consultant",
    company: "Saffron",
    description: "Led client onboarding for university societies in London and LA. Established strategic partnerships contributing to successful seed funding of $300,000. Provided key product strategy insights based on user feedback.",
  },
];

export const Timeline = () => {
  const handleCVRequest = () => {
    const email = "george@multiplier.info";
    const subject = "CV Request";
    const body = "Hi George,\n\nI came across your portfolio and would be interested in reviewing your full CV.\n\nBest regards";
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="py-20 px-4 bg-slate-900" id="background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Background
        </h2>
        
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Professional Experience</h3>
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full before:shadow-lg animate-fadeIn"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card className="bg-slate-800 border-slate-700">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <CardTitle className="text-xl font-semibold text-white">
                          {item.title}
                        </CardTitle>
                        <span className="text-sm text-blue-400">{item.year}</span>
                      </div>
                      <p className="text-blue-300">{item.company}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Education</h3>
            <Education />
          </div>

          <div className="flex justify-center pt-8">
            <Button
              onClick={handleCVRequest}
              variant="outline"
              size="lg"
              className="gap-2 border-blue-500/20 bg-blue-500/10 text-blue-100 hover:bg-blue-500/20 hover:text-white transition-colors animate-fadeIn"
            >
              <FileText className="w-4 h-4" />
              Request Full CV (Resume)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};