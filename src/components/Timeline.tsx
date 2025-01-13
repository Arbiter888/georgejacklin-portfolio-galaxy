import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timelineItems = [
  {
    year: "2023 - Present",
    title: "Senior Software Engineer",
    company: "Tech Innovation Labs",
    description: "Leading development of cloud-native applications and mentoring junior developers.",
  },
  {
    year: "2020 - 2023",
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    description: "Developed and maintained enterprise web applications using React and Node.js.",
  },
  {
    year: "2018 - 2020",
    title: "Frontend Developer",
    company: "Creative Web Agency",
    description: "Created responsive web interfaces and improved user experience for client projects.",
  },
];

export const Timeline = () => {
  return (
    <section className="py-20 px-4 bg-slate-900" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Professional Experience
        </h2>
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
    </section>
  );
};