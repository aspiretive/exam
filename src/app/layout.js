import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/comps/menu/Menu";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
