import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#0078d4] text-white shadow-sm",
        secondary:
          "border-[#c7e0f4] bg-[#eff6fc] text-[#004e8c]",
        destructive:
          "border-[#fbc7b6] bg-[#fdf3f0] text-[#a4262c]",
        outline: "border-[#8a8886] text-[#242424] bg-white",
        success: "border-[#b5e0c4] bg-[#f0f9f3] text-[#0e6333]",
        purple: "border-[#d3b5e5] bg-[#f6f2f9] text-[#4b286d]",
        teal: "border-[#a7e3d8] bg-[#effaf8] text-[#006053]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
