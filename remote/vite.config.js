import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//NOTE - Importing federation plugin
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
        "./store": "./src/store",
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
  // Build configuration
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
