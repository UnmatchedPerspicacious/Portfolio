export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            About
          </span>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg md:text-xl">
            I&apos;m a <span className="text-primary font-semibold">serial founder</span> at 18, driven by an
            insatiable curiosity for technology and a passion for building
            products that solve real problems.
          </p>

          <p className="text-lg md:text-xl">
            My journey in entrepreneurship started early, and since then,
            I&apos;ve been relentlessly pursuing ideas that push boundaries.
            I&apos;m particularly fascinated by{" "}
            <span className="text-primary font-semibold">artificial intelligence</span> and{" "}
            <span className="text-primary font-semibold">data science</span>
            —fields that I believe will fundamentally reshape how we interact
            with technology and solve complex problems.
          </p>

          <p className="text-lg md:text-xl">
            I believe in building fast, learning faster, and never settling for
            the status quo. Every project I take on is an opportunity to create
            something meaningful and impactful.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Ventures Founded", value: "2+" },
            { label: "Projects Built", value: "10+" },
            { label: "Years Coding", value: "3+" },
            { label: "Cups of Coffee", value: "∞" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
