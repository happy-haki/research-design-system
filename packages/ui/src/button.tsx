import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "./cn";

const buttonVariants = cva("rds-button", {
  variants: {
    variant: {
      primary: "rds-button--primary",
      secondary: "rds-button--secondary",
      ghost: "rds-button--ghost"
    },
    size: {
      sm: "rds-button--sm",
      md: "rds-button--md",
      lg: "rds-button--lg"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  slot?: string;
}

export const Button = ({ className, variant, size, slot = "button", ...props }: ButtonProps) => {
  return (
    <button
      data-slot={slot}
      className={cn(buttonVariants({ variant, size }), className)}
      type="button"
      {...props}
    />
  );
};
