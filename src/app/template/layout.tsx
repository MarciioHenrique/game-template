"use client";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="container h-full mx-auto p-8">{children}</div>;
}
