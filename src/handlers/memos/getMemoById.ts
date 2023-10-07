import { db } from "src";
import { memoIdSchema } from "src/models/memos/memoParams";
import { transformStringToNumberParamsId } from "src/utils/transformStringToNumberParamsId";

export const getMemoById = {
  handler: async ({ params: { id } }: { params: { id: number } }) => {
    return await db.memo.findUnique({ where: { id } });
  },
  hook: {
    transform: transformStringToNumberParamsId,
    params: memoIdSchema,
    detail: {
      tags: ["Memos"],
    },
  },
};
