import { getTranslations } from "next-intl/server";
import { CardItem } from "./card-item";

export default async function Page() {
  const t = await getTranslations();
  return (
    <div className="to-background-900 relative bg-gradient-to-b from-background">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-32 text-center">
        <h1 className="text-5xl font-bold text-foreground md:text-6xl">
          DeepSeek Magic
        </h1>

        <p className="mt-6 max-w-xl text-lg text-foreground-400">
          {t("SiteConfig.description")}
        </p>
      </div>

      <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardItem
          title={
            <>
              URL Slug Generator <span className="sr-only">by DeepSeek</span>
            </>
          }
          icon="formkit:url"
        />
      </div>
    </div>
  );
}
