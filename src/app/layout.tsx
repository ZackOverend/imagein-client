import type { Metadata } from "next";
import { Libre_Caslon_Display, Raleway } from "next/font/google";
import "./globals.css";

const libreCaslon = Libre_Caslon_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const raleway = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Image-IN",
  description: "Analyze your AI images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreCaslon.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
