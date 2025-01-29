"use client";

import * as React from "react";

import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "~/i18n/routing";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>;
}
