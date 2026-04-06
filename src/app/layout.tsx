import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rizka Putera Suryaresmana | Full-Stack Developer Portfolio",
  description:
    "Passionate full-stack developer crafting beautiful, performant web experiences with modern technologies like React, Next.js, and Node.js.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Rizka Putera Suryaresmana" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rizka Putera Suryaresmana | Full-Stack Developer Portfolio",
    description:
      "Passionate full-stack developer crafting beautiful, performant web experiences.",
    siteName: "Rizka Putera Suryaresmana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizka Putera Suryaresmana | Full-Stack Developer Portfolio",
    description:
      "Passionate full-stack developer crafting beautiful, performant web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                borderRadius: "12px",
                padding: "12px 16px",
                fontSize: "14px",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
