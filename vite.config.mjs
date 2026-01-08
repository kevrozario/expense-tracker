import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/transactions": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/csv-uploads": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/categories" : {
        target: "http://localhost:3000",
        changeOrigin: true
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.mjs",
  },
});
