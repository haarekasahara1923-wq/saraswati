import type { Metadata } from "next";
import { Poppins, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const notoSans = Noto_Sans_Devanagari({
  variable: "--font-noto-sans",
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saraswati Convent School, Ikhara, Morar",
  description: "Official website of Saraswati Convent School, Ikhara, Morar, Gwalior (MP)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${notoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
