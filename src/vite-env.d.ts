/// <reference types="vite/client" />
declare function v4(): unknown;
declare global {
  interface Window {
    Kakao: unknown;
  }
}
interface ImportMetaEnv {
  readonly VITE_CUSTOM_ENV_VARIABLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}