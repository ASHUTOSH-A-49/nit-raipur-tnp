import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
// Removed: import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils.js"; // <-- Updated to .js
import { toggleVariants } from "@/components/ui/toggle.jsx"; // <-- Updated to .jsx

// CRITICAL CHANGE 1: Removed generic type definition for context.
const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
});

// CRITICAL CHANGE 2: Removed TypeScript generics and type extension
const ToggleGroup = React.forwardRef(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
    {/* Pass variant/size as context value */}
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

// CRITICAL CHANGE 3: Removed TypeScript generics and type extension
const ToggleGroupItem = React.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          // Safely combine context and local props.
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };