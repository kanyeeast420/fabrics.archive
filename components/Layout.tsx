import React from "react";
import Link from "next/link";
import { Header } from "./Header";

interface Layout {}

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="font-display font-normal bg-background text-text min-h-screen w-full text-xs">
      <Header />
      {children}
    </div>
  );
};
