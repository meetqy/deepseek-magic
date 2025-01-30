import { ToolSection } from "./tool-section";

export const metadata = {
  title: "URL Slug Generator",
  description:
    "Powered by DeepSeek's language model to intelligently transform text into clean, SEO-optimized URL slugs. Ideal for blog posts, documentation, and web content management.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale = "en" } = await params;
  const { default: Readme } = await import(`./readme/${locale}.mdx`);

  return (
    <div className="to-background-900 min-h-screen bg-gradient-to-b from-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
          URL Slug Generator
        </h1>
        <p className="mx-auto mt-6 max-w-5xl text-lg text-foreground-500">
          Powered by DeepSeek's language model to intelligently transform text
          into clean, SEO-optimized URL slugs. Ideal for blog posts,
          documentation, and web content management.
        </p>
      </div>

      <ToolSection />

      <article className="prose mx-auto max-w-screen-xl">
        <Readme />
      </article>
    </div>
  );
}
