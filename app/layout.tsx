import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Wizards | Expert Web & Backend Development Agency",
  description: "Challenges driven coding wizards specializing in complex backend systems, CI/CD, DevOps, AI adoption, and software architecture. We turn complex problems into elegant solutions with 100% customer satisfaction.",
  keywords: [
    "backend development",
    "web development",
    "DevOps",
    "CI/CD",
    "software architecture",
    "AI adoption",
    "workflow automation",
    "observability",
    "technical debt",
    "code quality",
    "consulting",
    "workshops",
  ],
  authors: [{ name: "Dev Wizards" }],
  creator: "Dev Wizards",
  publisher: "Dev Wizards",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dev Wizards | Expert Web & Backend Development Agency",
    description: "Challenges driven coding wizards. We turn complex problems into elegant solutions.",
    siteName: "Dev Wizards",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Wizards | Expert Web & Backend Development Agency",
    description: "Challenges driven coding wizards. We turn complex problems into elegant solutions.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
