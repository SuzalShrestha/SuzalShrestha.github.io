import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteGHPages from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react(), ViteGHPages],
  base: "/",
  build: {
    outDir: "dist",
  },
});
