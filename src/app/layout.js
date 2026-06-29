import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/UI/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "portfolio | liaqat",
  description: "Create a portfolio with next js ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="bg-black min-h-full flex flex-col body">
        <div className=" w-[95%] mx-auto text-white">
          {" "}
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
