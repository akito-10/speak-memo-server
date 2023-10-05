import { t } from "elysia";
import { db } from "src";
import { transformStringToNumberParamsId } from "src/utils/transformStringToNumberParamsId";

export const deleteMemo = {
  handler: async ({ params: { id } }: { params: { id: number } }) => {
    return await db.memo.delete({ where: { id } });
  },
  hook: {
    transform: transformStringToNumberParamsId,
    params: t.Object({
      id: t.Number(),
    }),
    detail: {
      tags: ["Memos"],
    },
  },
};
