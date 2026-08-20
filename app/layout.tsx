import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Salwa Qadir | Women’s Strength Coach",
    template: "%s | Salwa Qadir",
  },
  description:
    "Salwa Qadir is a Women’s Strength Coach helping women get stronger physically and mentally, feel more capable, and do more of what matters to them.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Salwa Qadir | Women’s Strength Coach",
    description:
      "Helping women transform physically and mentally, fall in love with fitness and become confident barbell lifters.",
    type: "website",
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
