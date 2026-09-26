import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078d4] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#0078d4] text-white shadow-sm hover:bg-[#106ebe] active:bg-[#005a9e] active:scale-[0.99]",
        destructive:
          "bg-[#d83b01] text-white shadow-sm hover:bg-[#c43601] active:scale-[0.99]",
        outline:
          "border border-[#0078d4] text-[#0078d4] bg-white hover:bg-[#eff6fc] active:bg-[#deecf9]",
        secondary:
          "bg-[#f3f2f1] text-[#242424] border border-[#e1dfdd] hover:bg-[#edebe9] active:bg-[#e1dfdd]",
        ghost:
          "hover:bg-[#f3f2f1] hover:text-[#0078d4]",
        link: "text-[#0078d4] underline-offset-4 hover:underline",
        white:
          "bg-white text-[#242424] hover:bg-[#f3f2f1] shadow-sm border border-[#e1dfdd]",
        fluentBrand:
          "bg-gradient-to-r from-[#0078d4] to-[#005a9e] text-white shadow-md hover:from-[#106ebe] hover:to-[#004578] active:scale-[0.99]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-6 text-base font-semibold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
