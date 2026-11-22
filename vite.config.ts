import { defineConfig } from "vite-plus"

const IGNORE_PATTERN = ["**/*.d.ts", "**/*.gen.ts", "**/*.js"]
export default defineConfig({
  resolve: { tsconfigPaths: true },
  lint: {
    options: { typeAware: true, typeCheck: true },
    plugins: ["import", "node", "import", "typescript", "react", "react-perf"],
    env: {
      builtin: true,
    },
    rules: {
      "no-unused-vars": "warn",
    },
    ignorePatterns: IGNORE_PATTERN,
  },
  fmt: {
    semi: false,
    singleAttributePerLine: true,
    sortImports: {
      newlinesBetween: false,
    },
    sortTailwindcss: {
      functions: ["cn"],
    },
    ignorePatterns: IGNORE_PATTERN,
  },
  staged: {
    "*.{ts,tsx,html,css}": "vp check --fix",
  },
})
