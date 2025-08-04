import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Virtual Staffing Solutions - Professional Remote Staffing",
  description: "A collaborative partner of Belyotte Global Opportunities. Professional virtual staffing solutions for businesses worldwide.",
  icons: {
    icon: 'https://static.readdy.ai/image/0509790048fb828d16069f1183307fbc/fb00fac02893b2eac2268c2a4b63a141.png',
    shortcut: 'https://static.readdy.ai/image/0509790048fb828d16069f1183307fbc/fb00fac02893b2eac2268c2a4b63a141.png',
    apple: 'https://static.readdy.ai/image/0509790048fb828d16069f1183307fbc/fb00fac02893b2eac2268c2a4b63a141.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
