import { db } from "src";
import { CreateMemoDto, createMemoSchema } from "src/models/memos/createMemo";

export const createMemo = {
  handler: async ({ body }: { body: CreateMemoDto }) => {
    return await db.memo.create({ data: body });
  },
  hook: {
    body: createMemoSchema,
    detail: {
      tags: ["Memos"],
    },
  },
};
