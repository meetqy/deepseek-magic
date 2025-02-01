import { Icon } from "@iconify/react";
import { Link } from "~/i18n/routing";

export function Footer() {
  return (
    <footer className="relative mt-32 w-full border-t pb-8 pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
          <div className="space-y-4">
            <h3 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-bold text-transparent">
              DeepSeek Magic
            </h3>
            <p className="max-w-lg leading-relaxed text-foreground-500">
              A collection of AI tools powered by DeepSeek language models,
              offering a series of practical utilities to help you quickly
              experience DeepSeek's powerful capabilities and improve work
              efficiency.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground-600">
              Related Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://github.com/meetqy/deepseek-magic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-foreground-500 transition-all hover:text-primary"
                >
                  <span className="mr-2">
                    <Icon className="h-6 w-6" icon="mdi:github" />
                  </span>
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="group flex items-center text-foreground-500 transition-all hover:text-primary"
                >
                  <span className="mr-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </span>
                  All Tools
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-divider pt-8 text-center">
          <p className="text-sm text-foreground-400">
            © {new Date().getFullYear()} DeepSeek Magic. Built with DeepSeek.
          </p>
        </div>
      </div>
    </footer>
  );
}
