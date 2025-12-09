import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
// CRITICAL CHANGE 1: Removed type imports (ControllerProps, FieldPath, FieldValues)
import { Controller, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils.js"; // <-- Updated to .js
import { Label } from "@/components/ui/label.jsx"; // <-- Updated to .jsx

const Form = FormProvider;

// Removed: type FormFieldContextValue<...> = { name: TName; };
// CRITICAL CHANGE 2: Removed explicit type assertion
const FormFieldContext = React.createContext({}); 

// CRITICAL CHANGE 3: Removed all generics and explicit prop type annotations
const FormField = ({ ...props }) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  // CRITICAL CHANGE 4: Removed type assertion from itemContext
  const { id } = itemContext; 

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

// Removed: type FormItemContextValue = { id: string; };
// CRITICAL CHANGE 5: Removed explicit type assertion
const FormItemContext = React.createContext({});

// CRITICAL CHANGE 6: Removed TypeScript generics
const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

// CRITICAL CHANGE 7: Removed TypeScript generics
const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = "FormLabel";

// CRITICAL CHANGE 8: Removed TypeScript generics
const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      // The aria-describedby attribute is correctly constructed in JavaScript
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

// CRITICAL CHANGE 9: Removed TypeScript generics
const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return <p ref={ref} id={formDescriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />;
});
FormDescription.displayName = "FormDescription";

// CRITICAL CHANGE 10: Removed TypeScript generics
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p ref={ref} id={formMessageId} className={cn("text-sm font-medium text-destructive", className)} {...props}>
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };