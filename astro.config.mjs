// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://amandinecousin.com",
  trailingSlash: "always",
  redirects: {
    "/": "/fr/",
  },
});
