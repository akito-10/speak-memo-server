import { t } from "elysia";
import { db } from "src";
import { transformStringToNumberParamsId } from "src/utils/transformStringToNumberParamsId";

export const getMemoById = {
  handler: async ({ params: { id } }: { params: { id: number } }) => {
    return await db.memo.findUnique({ where: { id } });
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
