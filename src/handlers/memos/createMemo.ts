import { t } from "elysia";
import { db } from "src";
import { CreateMemoDto } from "src/dto/createMemoDto";

export const createMemo = {
  handler: async ({ body }: { body: CreateMemoDto }) => {
    return await db.memo.create({ data: body });
  },
  hook: {
    body: t.Object({
      title: t.String(),
      content: t.String(),
    }),
  },
};
