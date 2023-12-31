import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  //github page deployment
  base: "/adoptme",
  plugins: [react()],
  root: "src",
});
