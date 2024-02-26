import "./styles.css";

import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next i18n",
  description: "Internationalization in nextjs",
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children }: Props) {
  return (
    <html className="h-full">
      <body className={cn(inter.className, "h-full")}>
        <Navigation />
        <main className="max-w-5xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
