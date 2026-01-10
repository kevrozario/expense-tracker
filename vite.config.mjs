import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/transactions/": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/categories": "http://localhost:3000",
      "/transactions": "http://localhost:3000",
      "/csv-uploads": "http://localhost:3000",
      "/stats/most-spent": "http://localhost:3000",
      "/stats/least-spent": "http://localhost:3000",
      "/stats/least-expensive": "http://localhost:3000",
      "/stats/most-expensive": "http://localhost:3000",
      "/carousel/top-category": "http://localhost:3000",
      "/carousel/bottom-category": "http://localhost:3000",
      "/carousel/biggest-purchase": "http://localhost:3000",
      "/carousel/smallest-purchase": "http://localhost:3000",
      "/carousel/total-amount": "http://localhost:3000",
      "/carousel/transaction-count": "http://localhost:3000",
      "/carousel/average-amount": "http://localhost:3000",


    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.mjs",
  },
});
