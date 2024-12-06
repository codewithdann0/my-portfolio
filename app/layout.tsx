import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'
import Contact from "./components/Services";
import Footer from "./components/Footer";
import Skills from './components/Skills';
import Techstacks from './components/Techstacks';
import Exprience from './components/Exprience'
import Services from "./components/Services";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Daniel Tigistu portfolio",
  description: "This is Daniel Tigistu personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                    rel="stylesheet"
                />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        <Navbar/>
        <Hero/>
        <About/>
        <Techstacks/>
        <Skills />
       
        <Exprience/>
        <Services/>
        <Footer/>
        {children}
      </body>
    </html>
  );
}
