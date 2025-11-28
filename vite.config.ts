/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import path from "path";

export default defineConfig(({ mode }) => {
  return {
    mode,
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: {
        "@modules": path.resolve(__dirname, "./src/modules"),
        "@src": path.resolve(__dirname, "./src"),
        "@common": path.resolve(__dirname, "./src/modules/common"),
        "@routes": path.resolve(__dirname, "./src/routes"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@styles": path.resolve(__dirname, "./src/styles"),
      },
    },
    build: {
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom", "mobx", "axios", "chart.js"],
          },
        },
      },
    },
  };
});
