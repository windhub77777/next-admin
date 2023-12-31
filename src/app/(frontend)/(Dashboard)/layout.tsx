import type { Metadata } from "next";
import SidenavBar from "@/components/SidenavBar/page";
import Header from "@/components/header/page";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
      <SidenavBar />
      {children}
    </>
  );
}
