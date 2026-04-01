import type { HTMLAttributes } from "react";
import { cn } from "./cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  slot?: string;
}

export const Card = ({ className, slot = "card", ...props }: CardProps) => {
  return <div data-slot={slot} className={cn("rds-card", className)} {...props} />;
};
