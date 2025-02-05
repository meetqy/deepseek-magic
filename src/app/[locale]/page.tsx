import { getTranslations } from "next-intl/server";
import { CardItem } from "./card-item";
import { navs } from "~/lib/navs";

export default async function Page() {
  const t = await getTranslations();
  return (
    <div className="to-background-900 relative bg-gradient-to-b from-background">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-32 text-center">
        <h1 className="text-5xl font-bold text-foreground md:text-6xl">
          DeepSeek Magic
        </h1>

        <p className="mt-6 max-w-5xl text-lg text-foreground-400">
          {t("SiteConfig.description")}
        </p>
      </div>

      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {navs.map((item) => (
          <CardItem
            key={item.href}
            title={
              <>
                {item.title} <span className="sr-only">by DeepSeek</span>
              </>
            }
            href={item.href}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
