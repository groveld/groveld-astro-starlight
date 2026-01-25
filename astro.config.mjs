// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://www.groveld.com",
  integrations: [
    starlight({
      lastUpdated: true,
      pagination: false,
      title: "Groveld",
      logo: {
        light: "./src/assets/logo-red.svg",
        dark: "./src/assets/logo-white.svg",
      },
      editLink: {
        baseUrl: "https://github.com/groveld/groveld-docs/edit/main/docs/",
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
    }),
  ],
});
