import type { Metadata } from "next";

import AuthLayout from "./AuthLayout";

export const metadata: Metadata = {
  title: "Peek Login",
  description: "Log into peek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout> {children}</AuthLayout>;
}
