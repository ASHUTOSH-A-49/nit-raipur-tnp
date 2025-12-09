import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils.js"; // <-- Updated to .js
import { buttonVariants } from "@/components/ui/button.jsx"; // Removed ButtonProps import, kept buttonVariants

// CRITICAL CHANGE 1: Removed type annotation (: React.ComponentProps<"nav">)
const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

// CRITICAL CHANGE 2: Removed TypeScript generics
const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
));
PaginationContent.displayName = "PaginationContent";

// CRITICAL CHANGE 3: Removed TypeScript generics
const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

// Removed: type PaginationLinkProps = { isActive?: boolean; } & Pick<ButtonProps, "size"> & React.ComponentProps<"a">;

// CRITICAL CHANGE 4: Removed type annotation (: PaginationLinkProps)
const PaginationLink = ({ className, isActive, size = "icon", ...props }) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

// CRITICAL CHANGE 5: Removed type annotation (: React.ComponentProps<typeof PaginationLink>)
const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

// CRITICAL CHANGE 6: Removed type annotation (: React.ComponentProps<typeof PaginationLink>)
const PaginationNext = ({ className, ...props }) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

// CRITICAL CHANGE 7: Removed type annotation (: React.ComponentProps<"span">)
const PaginationEllipsis = ({ className, ...props }) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};