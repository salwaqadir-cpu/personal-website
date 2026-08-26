import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Salwa Qadir | Women’s Strength Coach",
    short_name: "Salwa Qadir",
    description:
      "Women’s strength coaching built around Strength to Lighten Your Life.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfcf9",
    theme_color: "#17392f",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
