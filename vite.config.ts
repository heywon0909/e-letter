import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({command, mode })=>{
  const env = loadEnv(mode, process.cwd(), '');
  console.log('env', env);
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
