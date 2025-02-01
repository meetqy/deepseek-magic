"use client";
import { Button, Card, CardBody, CardFooter } from "@heroui/react";
import { Icon } from "@iconify/react";
import { type ReactNode } from "react";
import { Link } from "~/i18n/routing";

export const CardItem = ({
  title,
  icon,
  description,
}: {
  title: ReactNode;
  icon: string;
  description: string;
}) => {
  return (
    <Card shadow="sm" isPressable as={Link} href={"/url-slug-generator"}>
      <CardBody>
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <Button isIconOnly color="primary" variant="flat" size="lg">
            <Icon className="h-6 w-6" icon={icon} />
          </Button>
          {title}
        </h2>
      </CardBody>
      <CardFooter className="text-default-500">{description}</CardFooter>
    </Card>
  );
};
