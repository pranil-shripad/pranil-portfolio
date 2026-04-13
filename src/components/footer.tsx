"use client";

export function Footer() {
  return (
    <footer className="py-12 mt-8 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pranil Shripad. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground/50">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
