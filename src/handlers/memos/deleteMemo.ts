import { t } from "elysia";
import { MEMOS } from "src/db/memo";

export const deleteMemo = {
  handler: ({ params: { id } }: { params: { id: string } }) => {
    const memo = MEMOS.find((memo) => memo.id === id);

    if (!memo) {
      return {};
    }

    MEMOS.splice(MEMOS.indexOf(memo), 1);

    return MEMOS;
  },
  hook: {
    params: t.Object({
      id: t.String(),
    }),
  },
};
