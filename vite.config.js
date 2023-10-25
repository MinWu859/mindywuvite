// vite.config.js
import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    assetsInlineLimit:0,
    rollupOptions: {
      input: {
        index: 'index.html', // 主入口（默认入口）
        resume: 'resume.html', // 额外的 HTML 文件1
        reflection: 'Reflection.html', //
        gallery: 'gallery.html', // // 额外的 HTML 文件2
        // 添加更多 HTML 文件入口如有需要
      },
    },
  },
});