import { ToolSection } from "./tool-section";

export default function Page() {
  return (
    <div className="to-background-900 min-h-screen bg-gradient-to-b from-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
          DeepSeek URL Slug Generator
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-500">
          Powered by DeepSeek AI to transform your text into clean, SEO-friendly
          URLs instantly. Perfect for blog posts, documentation, and web content
          management.
        </p>
      </div>

      <ToolSection />
    </div>
  );
}
