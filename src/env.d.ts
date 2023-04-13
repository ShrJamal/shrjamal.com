/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
