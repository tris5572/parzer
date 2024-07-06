import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === "production" ? "/parzer/" : "/";
  return {
    plugins: [react(), tsconfigPaths()],
    base,
  };
});
