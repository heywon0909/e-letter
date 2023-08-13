import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/e-letter/',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@img', replacement: path.resolve(__dirname, 'public/img') },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        intro: `
          import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY = "${process.env.VITE_KAKAO_JAVASCRIPT_KEY}";
          import.meta.env.VITE_KAKAO_REST_API_KEY = "${process.env.VITE_KAKAO_REST_API_KEY}";
          import.meta.env.VITE_KAKAO_REDIRECT_URI = "${process.env.VITE_KAKAO_REDIRECT_URI}";
          import.meta.env.VITE_CLOUDINARY_URL = "${process.env.VITE_CLOUDINARY_URL}";
          import.meta.env.VITE_CLOUDINARY_KEY = "${process.env.VITE_CLOUDINARY_KEY}";
          import.meta.env.VITE_UPLOAD_PRESET = "${process.env.VITE_UPLOAD_PRESET}";
          import.meta.env.VITE_CRYPTOJS_SECRET_KEY = "${process.env.VITE_CRYPTOJS_SECRET_KEY}";
        `,
      },
    },
  },
})
