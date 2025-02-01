import { ToolSection } from "./tool-section";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale = "en" } = await params;
  const { default: Readme } = await import(`./readme/${locale}.md`);

  return (
    <div className="to-background-900 min-h-screen bg-gradient-to-b from-background">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
          Text to Emoji Converter
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Transform your text into expressive emojis using DeepSeek AI. Perfect
          for social media, messaging, and creative writing.
        </p>
      </div>

      <ToolSection />

      <article className="prose mx-auto max-w-screen-xl">
        <Readme />
      </article>
    </div>
  );
}
