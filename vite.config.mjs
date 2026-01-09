import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/categories": "http://localhost:3000",
      "/transactions": "http://localhost:3000",
      "/csv-uploads": "http://localhost:3000",
      "/stats/most-spent": "http://localhost:3000",
      "/stats/least-spent": "http://localhost:3000",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.mjs",
  },
});
