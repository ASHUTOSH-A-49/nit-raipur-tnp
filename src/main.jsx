// src/main.jsx

import { createRoot } from "react-dom/client";

// CRITICAL: Ensure this import path matches the renamed file
import App from "./App.jsx"; 
import "./index.css";

// The change is removing the TypeScript non-null assertion operator (!)
const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(<App />);
} else {
    // Optionally add an error message if the root element isn't found
    console.error("Root element with ID 'root' not found in the document.");
}