"use client";

import { Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link, usePathname } from "~/i18n/routing";
import { siteConfig } from "~/lib/site-config";

export const FooterSection = () => {
  const pathname = usePathname();

  return (
    <>
      <Divider className="my-12" />
      <section className="prose mx-auto max-w-screen-xl">
        <h2>Related link</h2>
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
    </>
  );
};
