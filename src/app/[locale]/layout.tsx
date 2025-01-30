import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";
import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "~/components/navbar";
import { Providers } from "~/components/providers";
import { Toaster } from "react-hot-toast";

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: {
      default: `${t("SiteConfig.title")} | DeepSeekMagic`,
      template: "%s | DeepSeekMagic",
    },
    description: t("SiteConfig.description"),
  };
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${GeistSans.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <TRPCReactProvider>
            <Providers>
              <Navbar />
              {children}

              <Toaster />
            </Providers>
          </TRPCReactProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
