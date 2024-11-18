import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import glsl from "vite-plugin-glsl";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), glsl()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/, // aplica o loader apenas aos arquivos .js dentro do diretório src
  },
});
