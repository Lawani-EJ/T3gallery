import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { topnav } from "./_components/topnav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Generated by a loyal subscriber to Theo on YouTube!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <topnav />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
