// src/lib/utils.js

// CRITICAL CHANGE 1: Removed the TypeScript-specific 'type ClassValue' import
import { clsx } from "clsx"; 
import { twMerge } from "tailwind-merge";

// CRITICAL CHANGE 2: Removed the TypeScript type annotation from the function parameter
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}