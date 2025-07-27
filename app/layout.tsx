import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "f4rmhouse - the browser-native MCP client",
  description: "Use MCP servers to multiply the power of any LLM you want!",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
