import { ToolSection } from "./tool-section";

export const metadata = {
  title: "TikTok Hashtag Generator",
  description: `Generate trending TikTok hashtags for your content using DeepSeek AI. Boost your reach and engagement with relevant tags.`,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale = "en" } = await params;
  const { default: Readme } = await import(`./readme/${locale}.md`);

  return (
    <div className="to-background-900 min-h-screen bg-gradient-to-b from-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
          {metadata.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          {metadata.description}
        </p>
      </div>

      <ToolSection />

      <article className="prose mx-auto max-w-screen-xl">
        <Readme />
      </article>
    </div>
  );
}
