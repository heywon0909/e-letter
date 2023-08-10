/// <reference types="vite/client" />
declare function v4(): unknown;
declare global {
  interface Window {
    Kakao: unknown;
  }
}