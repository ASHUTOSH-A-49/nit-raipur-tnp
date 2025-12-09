import { NavLink as RouterNavLink } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils.js"; // <-- CRITICAL: Updated from .ts to .js

// Removed: import { NavLinkProps } from "react-router-dom";
// Removed: interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> { ... }

// CRITICAL CHANGE: Removed TypeScript generics from forwardRef
const NavLink = forwardRef(
  // CRITICAL CHANGE: Removed all explicit type annotations from function signature
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        // The isActive and isPending properties are standard arguments passed by React Router to the className function
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };