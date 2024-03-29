import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const inter = Poppins({
   subsets: ["latin"],
   weight: ['400', '500', '600'] 
});


export const metadata: Metadata = {
  title: "Eli Francisco",
  description: "Eli Francisco is a software enginner...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
