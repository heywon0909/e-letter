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
    KAKAO_JAVASCRIPT_KEY: JSON.stringify(env.KAKAO_JAVASCRIPT_KEY),
    KAKAO_REST_API_KEY: JSON.stringify(env.KAKAO_REST_API_KEY),
    KAKAO_REDIRECT_URI: JSON.stringify(env.KAKAO_REDIRECT_URI),
    CLOUDINARY_URL: JSON.stringify(env.CLOUDINARY_URL),
    CLOUDINARY_KEY: JSON.stringify(env.CLOUDINARY_KEY),
    UPLOAD_PRESET: JSON.stringify(env.UPLOAD_PRESET),
    CRYPTOJS_SECRET_KEY: JSON.stringify(env.CRYPTOJS_SECRET_KEY),
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
