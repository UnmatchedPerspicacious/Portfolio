export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Eshel Nagar. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          Built with <span className="text-primary">passion</span> and{" "}
          <span className="text-primary">code</span>.
        </p>
      </div>
    </footer>
  );
}
