import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Bryan's Website",
  description: "Generated by with love by Bryan",
};

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full min-h-screen">
        {children}
      </main>
    </>
  );
}