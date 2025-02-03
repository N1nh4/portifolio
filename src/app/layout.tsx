import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})



export const metadata: Metadata = {
  title: "Portifolio Alana Abreu",
  description: "meu portifolio usando react next",
  icons: "/favicon.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={` bg-white dark:bg-gray-900 text-black dark:text-white ${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
