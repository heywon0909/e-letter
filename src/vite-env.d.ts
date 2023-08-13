/// <reference types="vite/client" />
declare function v4(): unknown;
declare global {
  interface Window {
    Kakao: unknown;
  }
}
interface ImportMetaEnv {
  readonly VITE_KAKAO_JAVASCRIPT_KEY: string;
  readonly VITE_KAKAO_REST_API_KEY: string;
  readonly VITE_KAKAO_REDIRECT_URI: string;
  readonly VITE_CLOUDINARY_URL: string;
  readonly VITE_CLOUDINARY_KEY: string;
  readonly VITE_UPLOAD_PRESET: string;
  readonly VITE_CRYPTOJS_SECRET_KEY: string;  
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}