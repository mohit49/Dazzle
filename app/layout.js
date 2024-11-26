

import localFont from "next/font/local";
import "./globals.css";
import Footer from "../app/includes/Footer";
import Header from "./includes/Header";

import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';
import ClientSideRender from "@/libs/clientSideRender";

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



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    <ClientSideRender>
          {children}
          </ClientSideRender>
        
      </body>
    </html>
  );
}
