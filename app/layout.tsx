import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";
import { PHProvider } from "./providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "f4rmhouse | Mod your GPT",
  description: "The best MCP client that you can quickly use inside of your browser.",
  keywords: ["MCP", "GPT", "AI", "browser", "client", "f4rmhouse"],
  authors: [{ name: "f4rmhouse" }],
  creator: "f4rmhouse",
  publisher: "f4rmhouse",
  
  // Open Graph meta tags for social media sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://f4rmhouse.com', // Replace with your actual domain
    siteName: 'f4rmhouse',
    title: 'f4rmhouse | The browser-native MCP client',
    description: 'f4rmhouse is great for customizing your AI and sharing it with friends.',
    images: [
      {
        url: '/f4rmhouse-social.png',
        width: 1200,
        height: 630,
        alt: 'f4rmhouse - Mod your GPT',
      },
    ],
  },
  
  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    site: '@f4rmhouse', // Replace with your Twitter handle
    creator: '@f4rmhouse', // Replace with your Twitter handle
    title: 'f4rmhouse | The browser-native MCP client',
    description: 'f4rmhouse is great for customizing your AI and sharing it with friends.',
    images: ['/f4rmhouse-social.png'],
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <PHProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </PHProvider>
      </body>
    </html>
  );
}
