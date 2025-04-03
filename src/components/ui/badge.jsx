import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full text-sm font-medium", {
  variants: {
    variant: {
      default: "bg-gray-100 text-gray-800",
      primary: "bg-blue-500 text-white",
      secondary: "bg-green-500 text-white",
      destructive: "bg-red-500 text-white",
      outline: "border border-gray-300 bg-white text-gray-800",
    },
    size: {
      default: "py-1 px-2",
      sm: "py-0.5 px-1",
      lg: "py-2 px-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Badge = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span"> & { variant?: string; size?: string; }>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span className={cn(badgeVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
