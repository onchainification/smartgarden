import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  /**
   * Defines global constant replacments
   * @see https://vitejs.dev/config/shared-options.html#define
   */
  define: {
    global: "globalThis",
  },
  resolve: {
    /**
     * Polyfills nodejs imports
     * @see https://vitejs.dev/config/shared-options.html#resolve-alias
     */
    alias: {
      process: "process/browser",
      util: "util",
    },
  },
  /**
   * Enables react
   * @see https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md
   */
  plugins: [react()],
  /**
   * Enable cross site requests
   * @see https://docs.safe.global/safe-core-aa-sdk/safe-apps/get-started#cors
   */
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
});
