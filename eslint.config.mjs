import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.extends("prettier"),
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.extends("prettier"),
  {
    plugins: {
      prettier: (await import("eslint-plugin-prettier")).default,
      prettier: (await import("eslint-plugin-prettier")).default,
    },
    rules: {
      "prettier/prettier": [
        "error",
        { singleQuote: false, jsxSingleQuote: false, endOfLine: "auto" },
      ],
      "./src/generated": "off",
    },
    ignores: ["src/generated/*"],
  },
];

export default eslintConfig;
