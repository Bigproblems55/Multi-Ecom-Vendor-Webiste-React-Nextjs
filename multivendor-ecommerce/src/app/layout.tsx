import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter,
  Great_Vibes,Cormorant_Garamond,
  Montserrat,Cinzel, Cinzel_Decorative

 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from '@clerk/nextjs';

 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
}); 

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin", "cyrillic"],
  weight: "400",
  style: "normal",
}); 
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
}); 
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
}); 

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
}); 

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
}); 

export const metadata: Metadata = {
  title: "E-com here to there",
  description: "Generated perponderations of shining e-commerce",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider>
      <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} ${geistSans.variable}
      ${cormorantGaramond.variable} ${montserrat.variable} ${cinzel.variable} ${cinzelDecorative.variable} ${greatVibes.variable}
      h-full antialiased`
    }
    >
      <body className="text-5xl min-h-full flex flex-col">
       <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
       >

        {children}
       </ThemeProvider>
       </body>
    </html>
    </ClerkProvider>
  );
}
