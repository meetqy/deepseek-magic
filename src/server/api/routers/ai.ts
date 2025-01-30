import { z } from "zod";
import { openRouter } from "~/server/ai";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const aiRouter = createTRPCRouter({
  generator: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    const data = await openRouter({ content: input });
    return data;
  }),
});
