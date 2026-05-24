import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, TrendingUp, BarChart2, Bot, FlaskConical, Target, LineChart } from "lucide-react";

const features = [
  {
    icon: BarChart2,
    title: "Stock Pattern Training",
    description:
      "The algorithm is trained on a wide range of technical patterns across equities — from classic chart formations to complex multi-timeframe confluences that signal high-conviction entries.",
  },
  {
    icon: FlaskConical,
    title: "Active Backtesting",
    description:
      "Currently in rigorous backtesting across years of stock market data. Every strategy is stress-tested across bull markets, bear markets, and sideways conditions before deployment.",
  },
  {
    icon: Bot,
    title: "Automated Trading Engine",
    description:
      "Once live, TradeWave will execute trades autonomously — scanning the market, identifying setups, and managing positions without any manual intervention required.",
  },
  {
    icon: Target,
    title: "Individual Investor Focus",
    description:
      "Built for retail traders and individual investors who want systematic, emotion-free trading without the complexity of building their own infrastructure.",
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description:
      "Detailed reporting on every trade — win rate, average R:R, maximum drawdown, Sharpe ratio, and equity curves — so users always know exactly how the algorithm is performing.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning (Roadmap)",
    description:
      "The long-term vision includes an adaptive model that learns from live market conditions, refining its pattern recognition as markets evolve.",
  },
];

const stats = [
  { label: "Market", value: "Stocks" },
  { label: "Target Users", value: "Retail" },
  { label: "Execution", value: "Automated" },
  { label: "Status", value: "Training" },
];

export default function TradeWavePage() {
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
                  src="/TradeWave.png"
                  alt="TradeWave Logo"
                  fill
                  sizes="80px"
                  className="object-cover object-center"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  TradeWave
                </h1>
                <p className="text-primary font-medium">Co-Founder</p>
              </div>
            </div>
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full w-fit">
              Actively Building
            </span>
          </div>

          {/* Vision statement */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-snug">
              Algorithmic stock trading,{" "}
              <span className="text-primary">built for everyone.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              TradeWave is an automated stock trading platform built for individual
              investors. At its core is a trading algorithm currently in active
              development — being trained, refined, and backtested across years of
              equity market data to identify high-probability setups with precision.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The goal is simple: give retail investors access to a systematic,
              emotion-free trading engine that operates with the discipline and
              consistency that no human trader can maintain. No FOMO, no panic selling
              — just data-driven execution, every time.
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

          {/* Current phase callout */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-24">
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="w-5 h-5 text-primary" />
              <span className="text-primary font-mono text-sm tracking-wider uppercase font-semibold">
                Current Phase
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Training & Backtesting
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              TradeWave is currently in its most critical phase — building and validating
              the core algorithm. The model is being trained on a broad range of stock
              chart patterns and technical signals, then backtested against historical
              market data to measure real-world performance before any live deployment.
              This phase is non-negotiable: the algorithm doesn&apos;t go live until the
              numbers prove it&apos;s ready.
            </p>
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
            {["Fintech", "Stock Trading", "Algorithmic Trading", "Machine Learning", "Backtesting", "Automation", "Retail Finance", "Quantitative Analysis"].map((tag) => (
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