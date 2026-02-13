import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 必须设置为 './'，这样代码里的资源引用才会变成相对路径
  base: './', 
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true
  }
});