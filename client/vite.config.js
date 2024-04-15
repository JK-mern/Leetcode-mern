import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://backend-iota-ten-73.vercel.app/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
