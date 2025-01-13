import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Education } from "./Education";

const timelineItems = [
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
        </div>
      </div>
    </section>
  );
};