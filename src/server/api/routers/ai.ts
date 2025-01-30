import { z } from "zod";
import { openRouter } from "~/server/ai";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const aiRouter = createTRPCRouter({
  generator: publicProcedure
    .input(z.string().max(500))
    .mutation(async ({ input, ctx }) => {
      const origin = ctx.headers.get("origin") ?? "";
      // 校验来源是否是 deepseekmagic.com 或者 localhost:3000
      if (
        !origin.includes("deepseekmagic.com") &&
        !origin.includes("localhost:3000")
      ) {
        throw new Error("Invalid origin");
      }

      const data = await openRouter({ content: input });
      return data;
    }),
});
