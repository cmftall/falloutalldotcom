import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslint from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      "out/**/*",
      "node_modules/**/*",
      ".next/**/*",
      "dist/**/*",
      "build/**/*",
      "coverage/**/*"
    ]
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_" 
      }],
      "@typescript-eslint/no-explicit-any": "off", // Allow any for performance monitoring
      "prefer-const": "error",
      "no-var": "error",
      "react/no-unescaped-entities": "off", // Allow apostrophes in text content
    },
  },
];

export default eslintConfig;
