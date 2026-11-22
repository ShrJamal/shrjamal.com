/// <reference types="astro/client" />

// Set by the analytics script (an.sajam.dev) in production; BaseHead.astro
// stubs it in development so tracking calls are no-ops.
interface Window {
  analytics: { track: (...args: unknown[]) => void }
}
