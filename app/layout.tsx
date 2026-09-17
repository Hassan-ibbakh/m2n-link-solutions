import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://m2nlinksolutions.ma"),
  title: { default: "M2N Link Solutions | Solutions digitales intelligentes", template: "%s | M2N Link Solutions" },
  description: "M2N Link Solutions developpe des applications web et mobiles, des solutions AI, des automatisations et des produits digitaux fiables.",
  openGraph: { title: "M2N Link Solutions | Solutions digitales intelligentes", description: "Applications web et mobiles, AI, automatisation et transformation digitale.", type: "website", siteName: "M2N Link Solutions" },
  twitter: { card: "summary_large_image", title: "M2N Link Solutions | Solutions digitales intelligentes", description: "Applications web et mobiles, AI, automatisation et transformation digitale." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body><script dangerouslySetInnerHTML={{ __html: `(() => { const saved = localStorage.getItem("theme"); const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches; document.documentElement.dataset.theme = saved || (systemDark ? "dark" : "light"); })();` }} />{children}</body>
    </html>
  );
}
