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

        <p className="mt-6 max-w-5xl text-lg text-foreground-400">
          {t("SiteConfig.description")}
        </p>
      </div>

      <div className="container grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <CardItem
          title={
            <>
              URL Slug Generator <span className="sr-only">by DeepSeek</span>
            </>
          }
          href="/url-slug-generator"
          icon="formkit:url"
          description="Use ai to convert text to url slugify."
        />
        <CardItem
          title={
            <>
              Text to Emoji Converter{" "}
              <span className="sr-only">by DeepSeek</span>
            </>
          }
          href="/text-to-emoji-converter"
          icon="twemoji:grinning-face"
          description="Use ai to convert text to emoji."
        />
        <CardItem
          title={
            <>
              TikTok Hashtag Generator{" "}
              <span className="sr-only">by DeepSeek</span>
            </>
          }
          description="Use ai to generate hashtags for TikTok."
          href="/tiktok-hashtag-generator"
          icon="line-md:hash-small"
        />
      </div>
    </div>
  );
}
