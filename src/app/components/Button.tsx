import * as React from "react";

const buttonVariants = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md transition-all",
  outline:
    "border-2 border-primary text-primary hover:bg-primary/5 transition-all",
  ghost: "hover:bg-muted transition-colors",
  link: "text-primary underline-offset-4 hover:underline",
};

const sizeVariants = {
  sm: "h-9 px-4 text-sm rounded-lg",
  default: "h-11 px-6 text-sm font-medium rounded-xl",
  lg: "h-12 px-8 text-base font-medium rounded-xl",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof sizeVariants;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none ${buttonVariants[variant]} ${sizeVariants[size]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants, sizeVariants };
