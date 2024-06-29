import { Inter } from "next/font/google";
import "./globals.css";
import style from "./style.module.css";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import PlayMusicBar from "./_components/PlayMusicBar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone | Dashboard",
  description: "Spotify Clone | Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  max-w-full max-h-screen relative p-2 bg-black overflow-hidden`}
      >
        <div className={`${style.layout} gap-2`}>
          <SideNav></SideNav>
          {children}
          <div className=" text-white" style={{ gridColumnStart: 17 }}>fdsa</div>
        </div>
        <div className="fixed z-10 bg-black bottom-0 right-0 left-0 p-2">
          <PlayMusicBar></PlayMusicBar>
        </div>
      </body>
    </html>
  );
}
