"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link, usePathname } from "~/i18n/routing";
import { siteConfig } from "~/lib/site-config";

export const FooterSection = () => {
  const pathname = usePathname();

  return (
    <section className="container mt-20">
      <Button
        isIconOnly
        as={Link}
        href={
          siteConfig.github +
          "/tree/main/src/app/%5Blocale%5D/(tool)" +
          pathname
        }
        target="_blank"
      >
        <Icon className="h-6 w-6" icon="mdi:github" />
      </Button>
    </section>
  );
};
