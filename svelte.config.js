// svelte.config.js
import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import viteImagemin from 'vite-plugin-imagemin';
import viteCompression from 'vite-plugin-compression';
export default {
  plugins: [
    viteCompression(),
    viteImagemin({
      verbose: true,
      gifsicle: {
        optimizationLevel: 10,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 10,
      },
      mozjpeg: {
        quality: 70,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
    }),

    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true,
    },
  },
};
