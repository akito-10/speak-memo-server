import { t } from "elysia";
import { db } from "src";

export const deleteMemo = {
  handler: async ({ params: { id } }: { params: { id: number } }) => {
    return await db.memo.delete({ where: { id } });
  },
  hook: {
    params: t.Object({
      id: t.Number(),
    }),
  },
};
