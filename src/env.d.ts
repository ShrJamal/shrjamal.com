/// <reference types="astro/client-image" />
interface ImportMetaEnv {
  readonly PUBLIC_MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
