import type { Metadata } from "next";
import "./globals.css";
import HeaderServer from "@/blocks/global/Header/server";
import FooterServer from "@/blocks/global/Footer/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Focus Education Center",
  description: "Focus Education Center",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <NextIntlClientProvider>
        <body className={`antialiased font-istok`}>
          <HeaderServer />
          {children}
          <FooterServer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
