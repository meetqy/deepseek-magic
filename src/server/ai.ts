import { TRPCError } from "@trpc/server";
import { env } from "~/env";

interface OpenRouterResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export const openRouter = async ({ content }: { content: string }) => {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: env.API_KEY,
          "HTTP-Referer": "https://deepseekmagic.com", // Optional. Site URL for rankings on openrouter.ai.
          "X-Title": "DeepSeek Magic", // Optional. Site title for rankings on openrouter.ai.
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          messages: [
            {
              role: "user",
              content,
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Translation failed: ${response.statusText}`);
    }

    const data = (await response.json()) as OpenRouterResponse;
    return data.choices[0]?.message.content.trim();
  } catch (error) {
    console.log(JSON.stringify(error));

    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to fetch from openrouter.ai",
    });
  }
};
