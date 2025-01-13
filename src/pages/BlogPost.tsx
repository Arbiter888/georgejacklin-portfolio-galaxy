import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Link>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : blog ? (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-xl overflow-hidden"
          >
            {blog.cover_image && (
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={blog.cover_image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags?.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                {blog.title}
              </h1>
              <div className="text-sm text-slate-400 mb-8">
                {blog.published_at &&
                  format(new Date(blog.published_at), "MMMM d, yyyy")}
              </div>
              <div 
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-h1:text-4xl prose-h1:mb-8
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                  prose-strong:text-white prose-strong:font-semibold
                  prose-code:text-blue-300 prose-code:bg-slate-700/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                  prose-ul:text-slate-300 prose-ul:mb-6
                  prose-ol:text-slate-300 prose-ol:mb-6
                  prose-li:text-slate-300 prose-li:mb-2
                  prose-table:text-slate-300
                  prose-img:rounded-lg prose-img:my-8
                  prose-iframe:w-full prose-iframe:aspect-video prose-iframe:rounded-lg prose-iframe:my-8"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </motion.article>
        ) : (
          <div className="text-center text-slate-400">
            Blog post not found
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;