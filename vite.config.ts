import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@models": fileURLToPath(new URL("./src/shared/models", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/shared/utils", import.meta.url)),
    },
  },
});
