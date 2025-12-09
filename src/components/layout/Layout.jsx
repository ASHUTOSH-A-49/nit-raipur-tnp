// src/components/layout/Layout.jsx

// Removed: import { ReactNode } from "react";

import { Navbar } from "./Navbar.jsx"; // <-- Updated
import { Footer } from "./Footer.jsx"; // <-- Updated

// Removed: interface LayoutProps { children: ReactNode; }

// CRITICAL CHANGE: Removed the type annotation: ({ children }: LayoutProps)
export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};