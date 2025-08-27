import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export const Group = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div className={cn ("flex flex-col gap-2.5 ", className)} {...props}>
      {children}
    </div>
  );
};
