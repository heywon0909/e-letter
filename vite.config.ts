import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({command, mode })=>{
  const env = loadEnv(mode, process.cwd(), '')
  return {
  plugins: [react()],
  base: '/e-letter/',
  define: {
    VITE_KAKAO_JAVASCRIPT_KEY: JSON.stringify(env.VITE_KAKAO_JAVASCRIPT_KEY),
    VITE_KAKAO_REST_API_KEY: JSON.stringify(env.VITE_KAKAO_REST_API_KEY),
    VITE_KAKAO_REDIRECT_URI: JSON.stringify(env.VITE_KAKAO_REDIRECT_URI),
    VITE_CLOUDINARY_URL: JSON.stringify(env.VITE_CLOUDINARY_URL),
    VITE_CLOUDINARY_KEY: JSON.stringify(env.VITE_CLOUDINARY_KEY),
    VITE_UPLOAD_PRESET: JSON.stringify(env.VITE_UPLOAD_PRESET),
    VITE_CRYPTOJS_SECRET_KEY: JSON.stringify(env.VITE_CRYPTOJS_SECRET_KEY),
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
