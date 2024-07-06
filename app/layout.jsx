import { Inter } from "next/font/google";
import "./globals.css";
import style from "./style.module.css";
import SideNav from "./_components/SideNav";
import PlayMusicBar from "./_components/PlayMusicBar";
import VisibleContextProvider from "./_context/VisibleContextProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

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
        <VisibleContextProvider>
          <div className={`${style.layout} gap-2`}>
            <SideNav></SideNav>
            {children}
          </div>
          <div className="fixed z-10 bg-black bottom-0 right-0 left-0 p-2">
            <PlayMusicBar></PlayMusicBar>
          </div>
        </VisibleContextProvider>
      </body>
    </html>
  );
}
