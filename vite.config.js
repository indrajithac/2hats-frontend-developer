import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/2hats-frontend-developer/",
  server: { port: 3000 },
});
