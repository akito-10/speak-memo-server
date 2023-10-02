import { t } from "elysia";
import { MEMOS } from "src/db/memo";

export const getMemoById = {
  handler: ({ params: { id } }: { params: { id: string } }) => {
    return MEMOS.find((memo) => memo.id === id) || [];
  },
  hook: {
    params: t.Object({
      id: t.String(),
    }),
  },
};
