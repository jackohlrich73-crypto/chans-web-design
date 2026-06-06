import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2 focus:ring-offset-ink";
  const styles = {
    primary:
      "bg-cyan text-ink shadow-glow hover:-translate-y-0.5 hover:bg-white",
    secondary:
      "border border-white/15 bg-white/8 text-white hover:-translate-y-0.5 hover:border-cyan/60 hover:bg-white/12",
    ghost:
      "text-white/80 hover:bg-white/8 hover:text-white"
  };

  return (
    <a className={`${base} ${styles[variant]} ${className}`} href={href}>
      {children}
      {variant !== "ghost" ? <ArrowRight aria-hidden size={17} /> : null}
    </a>
  );
}
