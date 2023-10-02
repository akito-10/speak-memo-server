import { t } from "elysia";
import { MEMOS } from "src/db/memo";

export const updateMemo = {
  handler: ({
    params: { id },
    body,
  }: {
    params: { id: string };
    body: { title: string; content: string };
  }) => {
    const memo = MEMOS.find((memo) => memo.id === id);

    if (!memo) {
      return {};
    }

    return { ...memo, ...body, updatedAt: new Date() };
  },
  hook: {
    params: t.Object({
      id: t.String(),
    }),
    body: t.Object({
      title: t.String(),
      content: t.String(),
    }),
  },
};
