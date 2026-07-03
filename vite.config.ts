import { defineConfig } from "vite-plus"

export default defineConfig({
  lint: {
    options: { typeAware: true, typeCheck: true },
    plugins: ["import", "node", "import", "typescript", "react", "react-perf"],
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    env: {
      builtin: true,
    },
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
      "no-floating-promises": "off",
      "no-base-to-string": "off",
      "no-unused-vars": "warn",
    },
    ignorePatterns: [
      "**/*.d.ts",
      "**/*.gen.ts",
      "**/public/**",
      "**/*.js",
      "bun.lock",
    ],
  },
  fmt: {
    useTabs: false,
    tabWidth: 2,
    printWidth: 80,
    singleQuote: false,
    jsxSingleQuote: false,
    quoteProps: "as-needed",
    trailingComma: "all",
    semi: false,
    arrowParens: "always",
    bracketSameLine: false,
    bracketSpacing: true,
    singleAttributePerLine: true,
    sortImports: {
      newlinesBetween: false,
    },
    sortTailwindcss: {
      functions: ["clsx", "cn"],
    },
    ignorePatterns: [
      "**/*.d.ts",
      "**/*.gen.ts",
      "**/public/**",
      "**/*.js",
      "bun.lock",
    ],
  },
  staged: {
    "*.{ts,tsx,html,css}": "vp check --fix",
  },
})
