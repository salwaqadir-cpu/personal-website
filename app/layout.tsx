import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://salwa-qadir.dark-note-5102.chatgpt.site"),
  title: {
    default: "Salwa Qadir | Women’s Strength Coach",
    template: "%s | Salwa Qadir",
  },
  description:
    "Salwa Qadir is a women’s strength coach helping women get stronger physically and mentally, feel more capable, and do more of what matters to them.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Salwa Qadir | Women’s Strength Coach",
    description:
      "Through From Bodyweight to Barbells, Salwa helps women transform physically and mentally, fall in love with fitness, and become confident barbell lifters.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Salwa Qadir — Women don’t need to be told to do more. They need to be built up so they can.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salwa Qadir | Women’s Strength Coach",
    description:
      "Through From Bodyweight to Barbells, Salwa helps women transform physically and mentally, fall in love with fitness, and become confident barbell lifters.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
