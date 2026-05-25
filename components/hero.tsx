"use client";

import Image from "next/image";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen max-w-6xl mx-auto flex flex-col justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-12 lg:gap-20">
          
          {/* Right Side: Image Framework */}
          <div className="flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 bg-secondary/50 shadow-xl">
              <Image
                src="/portfolio-image.png"
                alt="Eshel Nagar Portfolio Image"
                fill
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Left Side: Content & Links */}
          {/* FIXED: Added mx-auto lg:mx-0 to center the text wrapper div between 768px and 1024px */}
          <div className="max-w-2xl order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
            <div className="mb-8">
              <span className="text-primary font-mono text-sm tracking-wider uppercase">
                Serial Founder
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-balance">Eshel Nagar</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              18-year-old entrepreneur building products that matter. Passionate
              about technology, startups, and creating impact at scale. Turning
              ideas into reality, one venture at a time.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <Link
                href="https://github.com/UnmatchedPerspicacious"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/eshel-nagar-3a8294259/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://discord.com/users/eshelnagar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Discord"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}