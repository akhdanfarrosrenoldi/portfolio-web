import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  children: ReactNode;
};

const baseClassName =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-zinc-900 text-zinc-50 hover:bg-zinc-800 ring-offset-background",
  secondary:
    "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border border-zinc-200 ring-offset-background",
  ghost: "text-zinc-900 hover:bg-zinc-100 ring-offset-background",
};

export function Button({
  asChild,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const Component: "button" | "span" = asChild ? "span" : "button";

  return (
    <Component
      className={`${baseClassName} ${variants[variant]} ${className}`}
      {...(!asChild ? props : {})}
    >
      {children}
    </Component>
  );
}

