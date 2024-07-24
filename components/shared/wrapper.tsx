import { cn } from "@/lib/utils";

export default function Wrapper({ children, className }: IWrapper) {
  return (
    <div
      className={cn("mx-auto max-w-screen-2xl w-full px-4 md:px-6", className)}>
      {children}
    </div>
  );
}
