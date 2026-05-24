import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Zap, TrendingUp, Shield, BarChart2, Bot, Clock } from "lucide-react";

const features = [
  {
    icon: BarChart2,
    title: "Candlestick Pattern Recognition",
    description:
      "Trained on thousands of historical patterns including doji, engulfing, hammer, shooting star, and dozens more. The algorithm identifies high-probability setups in real time.",
  },
  {
    icon: Bot,
    title: "Fully Automated Execution",
    description:
      "No human emotion, no hesitation. Once a pattern is confirmed and conditions are met, the algorithm executes instantly — entries, exits, and stop-losses handled autonomously.",
  },
  {
    icon: TrendingUp,
    title: "Backtesting Engine",
    description:
      "Every strategy is validated against years of historical crypto market data before going live. Performance metrics, drawdown analysis, and win rates are calculated across multiple market conditions.",
  },
  {
    icon: Zap,
    title: "Real-Time Pattern Detection",
    description:
      "Monitors hundreds of crypto pairs simultaneously, scanning for pattern formations across multiple timeframes — from 1-minute scalps to daily swing setups.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Built-in position sizing, dynamic stop-losses, and maximum drawdown limits ensure capital preservation is always prioritised alongside returns.",
  },
  {
    icon: Clock,
    title: "Client Fund Management (Roadmap)",
    description:
      "The long-term vision: a regulated, fully autonomous system that manages client portfolios — giving retail investors access to institutional-grade algorithmic trading.",
  },
];

const stats = [
  { label: "Patterns Trained On", value: "1,000+" },
  { label: "Market", value: "Crypto" },
  { label: "Execution", value: "Automated" },
  { label: "Status", value: "Building" },
];

export default function CryptoVisionPage() {
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
                  src="/CryptoVision.png"
                  alt="CryptoVision Logo"
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  CryptoVision
                </h1>
                <p className="text-primary font-medium">Founder & CEO</p>
              </div>
            </div>
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full w-fit">
              Actively Building
            </span>
          </div>

          {/* Vision statement */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-snug">
              Institutional-grade algo trading,{" "}
              <span className="text-primary">built for crypto.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              CryptoVision is a fully automated cryptocurrency trading algorithm trained
              on thousands of chart and candlestick patterns. Where most retail traders
              rely on gut feeling and emotion, CryptoVision operates purely on pattern
              recognition — identifying high-probability setups and executing trades at
              machine speed with zero hesitation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The long-term vision is to open the platform to clients — giving everyday
              investors access to the kind of algorithmic trading infrastructure that was
              previously only available to hedge funds and institutional desks.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                  {stat.label}
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
            {["Fintech", "Crypto", "Algorithmic Trading", "Machine Learning", "Pattern Recognition", "Backtesting", "Automation", "AI"].map((tag) => (
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