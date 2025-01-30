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
                  href="https://github.com/deepseek-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-foreground-500 transition-all hover:text-primary"
                >
                  <span className="mr-2">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </span>
                  DeepSeek GitHub
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
