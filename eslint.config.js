import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
// import tseslint from "typescript-eslint"; // <-- REMOVED

export default [ // Changed tseslint.config(...) to a standard array export [...]
  { ignores: ["dist"] },
  {
    // extends: [js.configs.recommended, ...tseslint.configs.recommended], // <-- MODIFIED
    files: ["**/*.{js,jsx}"], // <-- CRITICAL: Changed from {ts,tsx} to {js,jsx}
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // Add parser options for React/JSX
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // The tseslint plugin block is REMOVED
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Use the standard recommended JS config instead of tseslint one
      ...js.configs.recommended.rules, 
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      
      // Removed "@typescript-eslint/no-unused-vars" rule
    },
  },
];