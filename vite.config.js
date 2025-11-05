import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use base path only for GitHub Pages, not for Vercel
  // Vercel will use "/" automatically, GitHub Pages needs "/Muhammad-Tahir/"
  base: process.env.VITE_BASE_PATH || (process.env.VERCEL ? "/" : "/Muhammad-Tahir/"),
});
