import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const startups = [
  {
    name: "CryptoVision",
    description:
      "A cutting-edge cryptocurrency analytics platform providing real-time market insights, predictive analysis, and portfolio management tools for traders and investors.",
    role: "Founder & CEO",
    status: "Actively Building",
    tags: ["Fintech", "Crypto", "Analytics", "AI"],
    link: "#",
    image: "/CryptoVision.png", // Add your image path here
  },
  {
    name: "TradeWave",
    description:
      "An innovative trading platform that democratizes access to financial markets through intuitive interfaces, automated strategies, and educational resources for new traders.",
    role: "Co-Founder",
    status: "Actively Building",
    tags: ["Trading", "Finance", "Platform", "Education"],
    link: "#",
    image: "/TradeWave.png", // Add your image path here
  },
];

export function Startups() {
  return (
    <section id="startups" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Startups
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ventures I&apos;ve Founded
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Building companies that solve real problems and create lasting impact
          in their industries.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {startups.map((startup) => (
            <div
              key={startup.name}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">

                    {/* Startup Image Container */}
                    <div className="relative w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-colors flex-shrink-0">
                      <Image
                        src={startup.image}
                        alt={`${startup.name} Logo`}
                        fill
                        sizes="56px"
                        className="object-cover object-center"
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {startup.name}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {startup.role}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {startup.status}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {startup.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {startup.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium group/link"
                >
                  Learn more
                  <span className="inline-block translate-x-0 group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}