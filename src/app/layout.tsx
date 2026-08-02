import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}

