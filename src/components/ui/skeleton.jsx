import { cn } from "@/lib/utils.js"; // <-- Updated to .js

// CRITICAL CHANGE: Removed type annotation (: React.HTMLAttributes<HTMLDivElement>)
function Skeleton({ className, ...props }) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };