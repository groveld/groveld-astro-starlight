// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightCatppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://www.groveld.com",
  integrations: [
    starlight({
      plugins: [
        starlightCatppuccin({
          dark: { flavor: "macchiato", accent: "sky" },
          light: { flavor: "latte", accent: "sky" },
        }),
      ],
      title: "Groveld",
      logo: {
        light: "./src/assets/logo-red.svg",
        dark: "./src/assets/logo-white.svg",
        replacesTitle: true,
      },
      editLink: {
        baseUrl: "https://github.com/groveld/groveld-astro-starlight/edit/main",
      },
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/groveld" },
      ],
      sidebar: [
        {
          label: "Articles",
          autogenerate: { directory: "guides" },
        },
      ],
      lastUpdated: true,
      pagination: false,
    }),
  ],
});
