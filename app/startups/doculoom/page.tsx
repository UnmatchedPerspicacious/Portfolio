import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, FileText, PenLine, ClipboardCheck, Share2, BarChart3, Clock } from "lucide-react";

const features = [
  {
    icon: PenLine,
    title: "Write Your Process",
    description:
      "Write your process in plain format — rough notes, bullet points, or full write-ups. No templates, no markup, no formatting rules to learn.",
  },
  {
    icon: FileText,
    title: "Beautiful PDF Generation",
    description:
      "AI weaves your writing into a polished, structured PDF with headings, sections, and key points — ready to hand to a new hire or drop into your knowledge base.",
  },
  {
    icon: ClipboardCheck,
    title: "Auto-Generated Quizzes",
    description:
      "From the same process, DocuLoom automatically creates a quiz that tests workers on the steps and details that matter — no question-writing required.",
  },
  {
    icon: Share2,
    title: "Share With Your Workers",
    description:
      "Send the quiz straight to your team. Workers take it and pass it, so you know exactly who has completed their onboarding.",
  },
  {
    icon: BarChart3,
    title: "Statistics & Insights",
    description:
      "Track quiz results across your team — see who has taken it, who passed, and where people struggle, all in one place.",
  },
  {
    icon: Clock,
    title: "Faster Ramp-Up",
    description:
      "Pages of rough notes become a focused document and a pass/fail check a new team member can complete in minutes — cutting onboarding time from days to hours.",
  },
];

const stats = [
  { label: "Input", value: "Plain Text" },
  { label: "Output", value: "PDF + Quiz" },
  { label: "Built For", value: "Onboarding" },
  { label: "Status", value: "Live" },
];

export default function DocuLoomPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Back navigation */}
      <div className="px-6 md:px-12 lg:px-24 pt-10">
        <Link
          href="/#startups"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-24 pt-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              Startup
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center overflow-hidden border border-primary/20 flex-shrink-0">
                <Image
                  src="/DocuLoom.png"
                  alt="DocuLoom Logo"
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  DocuLoom
                </h1>
                <p className="text-primary font-medium">Founder & CEO</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full w-fit">
                Live
              </span>
              <Link
                href="https://doculoom.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity w-fit"
              >
                Visit DocuLoom
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Vision statement */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-snug">
              Onboarding that takes{" "}
              <span className="text-primary">minutes, not days.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              DocuLoom is an AI-powered onboarding tool built around a simple
              flow: write your process in plain text, and it generates a
              beautiful, structured PDF — then automatically builds a quiz from
              it to test your workers on what they&apos;ve learned.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Share the quiz with your team and watch the statistics come in —
              who took it, who passed, and where they struggled — so you know
              every new team member truly understands the process, not just
              that they read it.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <p className="text-2xl font-bold text-primary mb-1">{stat.label}</p>
                <p className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary font-mono text-sm tracking-wider uppercase">
                Features
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              Stack & Domain
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {["SaaS", "AI", "Onboarding", "HR Tech", "Next.js", "PDF Generation", "Quiz Generation", "Analytics"].map((tag) => (
              <span
                key={tag}
                className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
