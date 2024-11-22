import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  base: "/",
  plugins: [react(), glsl()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
