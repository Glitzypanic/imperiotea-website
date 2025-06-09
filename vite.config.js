import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ruta absoluta para mejor compatibilidad
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    assetsDir: "assets",
    copyPublicDir: true, // Asegurar que se copien los archivos de public
    rollupOptions: {
      input: {
        main: "/index.html",
      },
    },
  },
  publicDir: "public", // Explícitamente definir la carpeta public
  preview: {
    port: 4173,
    host: "localhost",
  },
});
