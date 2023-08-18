import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({command, mode })=>{
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: '/e-letter/',
    define: {
      'import.meta.env.KAKAO_JAVASCRIPT_KEY': JSON.stringify(env.VITE_KAKAO_JAVASCRIPT_KEY),
      'import.meta.env.KAKAO_REST_API_KEY': JSON.stringify(env.VITE_KAKAO_REST_API_KEY),
      'import.meta.env.KAKAO_REDIRECT_URI': JSON.stringify(env.VITE_KAKAO_REDIRECT_URI),
      'import.meta.env.CLOUDINARY_URL': JSON.stringify(env.VITE_CLOUDINARY_URL),
      'import.meta.env.CLOUDINARY_KEY': JSON.stringify(env.VITE_CLOUDINARY_KEY),
      'import.meta.env.UPLOAD_PRESET': JSON.stringify(env.VITE_UPLOAD_PRESET),
      'import.meta.env.CRYPTOJS_SECRET_KEY': JSON.stringify(env.VITE_CRYPTOJS_SECRET_KEY),
      'import.meta.env.FIREBASE_API_KEY': JSON.stringify(env.VITE_FIREBASE_API_KEY),
      'import.meta.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(env.VITE_FIREBASE_AUTH_DOMAIN),
      'import.meta.env.FIREBASE_DATABASE_URL': JSON.stringify(env.VITE_FIREBASE_DATABASE_URL),
      'import.meta.env.FIREBASE_PROJECT_ID': JSON.stringify(env.VITE_FIREBASE_PROJECT_ID),
      'import.meta.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(env.VITE_FIREBASE_STORAGE_BUCKET),
      'import.meta.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(env.VITE_FIREBASE_MESSAGING_SENDER_ID),
      'import.meta.env.FIREBASE_APP_ID': JSON.stringify(env.VITE_FIREBASE_APP_ID),
      'import.meta.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(env.VITE_FIREBASE_MEASUREMENT_ID),
      
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@img', replacement: path.resolve(__dirname, 'public/img') },
    ],
  },
}
})
