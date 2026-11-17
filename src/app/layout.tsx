import type { Metadata, Viewport } from "next";
import "@fontsource/geist/latin-400.css";
import "@fontsource/geist/latin-500.css";
import "@fontsource/geist/latin-600.css";
import "@fontsource/geist-mono/latin-400.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const socialImage = siteUrl
  ? [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Youssef Atef — Complex problems. Thoughtful software.",
      },
    ]
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Youssef Atef — Software Engineer",
  description:
    "Turning complex requirements into reliable software. Youssef Atef is a Software Engineer building SaaS, ERP platforms, data-intensive applications, and secure APIs.",
  authors: [{ name: "Youssef Atef" }],
  openGraph: {
    title: "Youssef Atef — Software Engineer",
    description:
      "Complex problems. Thoughtful software. Explore my approach to reliable SaaS platforms, business workflows, and accessible experiences.",
    type: "website",
    locale: "en_US",
    images: socialImage,
  },
  twitter: {
    card: siteUrl ? "summary_large_image" : "summary",
    title: "Youssef Atef — Software Engineer",
    images: socialImage,
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
