// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: null,
        manifest: false,
        filename: "sw.js",
        devOptions: { enabled: false },
        workbox: {
          globPatterns: ["**/*.{js,css,png,svg,webmanifest}"],
          // Le site publié sert le dossier client à la racine : sans cette correction, chaque fichier était cherché sous /client/… (404) et le mode hors ligne ne s’installait jamais.
          modifyURLPrefix: { "client/": "" },
          navigateFallback: null,
          cleanupOutdatedCaches: true,
          runtimeCaching: [
            { urlPattern: ({ request, url }) => request.mode === "navigate" && !url.pathname.startsWith("/~oauth"), handler: "NetworkFirst", options: { cacheName: "pages", networkTimeoutSeconds: 4, plugins: [{
              // Sans internet, une page jamais ouverte s'affiche quand même : les écrans connectés sont construits dans le navigateur.
              handlerDidError: async ({ request }) => (await caches.match(request.url, { ignoreSearch: true })) ?? (await caches.match("/workspaces")) ?? (await caches.match("/")) ?? Response.error(),
            }] } },
            { urlPattern: ({ url, sameOrigin }) => sameOrigin && url.pathname.startsWith("/assets/"), handler: "CacheFirst", options: { cacheName: "assets" } },
          ],
        },
      }),
    ],
  },
});
