import { TrendingUp, Code, Lightbulb, Brain, BarChart3, Users } from "lucide-react";

const skills = [
  {
    icon: TrendingUp,
    title: "Finance",
    description:
      "Deep understanding of financial markets, investment strategies, and startup fundraising mechanics.",
  },
  {
    icon: Code,
    title: "Programming",
    description:
      "Proficient in multiple languages and frameworks, from web development to system architecture.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship",
    description:
      "Experience in building ventures from zero to one, understanding market dynamics and scaling strategies.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Passionate about artificial intelligence, neural networks, and their applications in real-world solutions.",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description:
      "Skilled in data analysis, visualization, and extracting actionable insights from complex datasets.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Proven ability to lead teams, communicate vision, and drive projects to successful completion.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Section Tag */}
        <div className="flex items-center gap-4 mb-12 justify-center">
          <div className="w-12 h-px bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Skills
          </span>
          <div className="w-12 h-px bg-primary" /> {/* Symmetric right accent line */}
        </div>

        {/* Section Headers */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What I Bring to the Table
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          A diverse skill set built through years of hands-on experience in
          technology, business, and innovation.
        </p>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}