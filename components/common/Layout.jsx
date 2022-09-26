import React from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container max-w-2xl mx-auto">{children}</main>
    </>
  );
}
