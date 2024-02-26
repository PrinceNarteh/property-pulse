import React from "react";
import "@/assets/styles/globals.css";
import { Metadata } from "next";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Property Pulse | Find The Perfect Rental",
  description: "Find Your Dream Rental Property",
  keywords: "rental, find rentals, find properties",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
