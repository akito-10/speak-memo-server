import { t } from "elysia";
import { MEMOS } from "src/db/memo";
import { CreateMemoDto } from "src/dto/createMemoDto";

export const createMemo = {
  handler: ({ body }: { body: CreateMemoDto }) => {
    MEMOS.push({
      id: Math.max(...MEMOS.map((memo) => parseInt(memo.id))) + 1 + "",
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return MEMOS;
  },
  hook: {
    body: t.Object({
      title: t.String(),
      content: t.String(),
    }),
  },
};
