import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexa-intelligence.com"),
  title: { default: "Nexa Intelligence | Useful AI, built well", template: "%s | Nexa Intelligence" },
  description: "Nexa Intelligence builds intelligent web and mobile applications, AI systems, automation, and data products for ambitious teams.",
  openGraph: { title: "Nexa Intelligence | Useful AI, built well", description: "Web and mobile applications, AI systems, automation, and data products for ambitious teams.", type: "website", siteName: "Nexa Intelligence" },
  twitter: { card: "summary_large_image", title: "Nexa Intelligence | Useful AI, built well", description: "Web and mobile applications, AI systems, automation, and data products for ambitious teams." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
