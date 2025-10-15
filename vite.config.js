import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "b", // ビルド先フォルダ名を短く
    rollupOptions: {
      output: {
        entryFileNames: "index.js",      // JSファイル名を短く固定
        chunkFileNames: "[name].js",     // 分割JSも短く
        assetFileNames: "[name][extname]"// CSSや画像も短く
      }
    }
  }
});