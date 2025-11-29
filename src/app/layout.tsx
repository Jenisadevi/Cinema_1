import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CineScope – Curated Movies Directory",
    template: "%s | CineScope"
  },
  description:
    "Discover top-rated movies with curated lists, genres, and filters. Built with Next.js App Router, TypeScript, and Tailwind CSS.",
  metadataBase: new URL("https://example-cinescope.vercel.app"),
  openGraph: {
    title: "CineScope – Curated Movies Directory",
    description:
      "Discover top-rated movies with curated lists, genres, and filters.",
    type: "website",
    url: "https://example-cinescope.vercel.app"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 bg-[var(--background)] pb-12 pt-6">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
