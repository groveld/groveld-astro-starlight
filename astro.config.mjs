// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import starlightThemeFlexoki from "starlight-theme-flexoki";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      lastUpdated: true,
      pagination: false,
      //   plugins: [starlightThemeFlexoki()],
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
