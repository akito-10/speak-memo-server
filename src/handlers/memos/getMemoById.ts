import { db } from "src";
import { memoIdSchema } from "src/models/memos/memoParams";
import { transformStringToNumberParamsId } from "src/utils/transformStringToNumberParamsId";

export const getMemoById = {
  handler: async ({ params: { id } }: { params: { id: number } }) => {
    const memo = await db.memo.findUnique({ where: { id } });

    if (!memo) throw new Error("該当するメモが存在しません");

    return memo;
  },
  hook: {
    transform: transformStringToNumberParamsId,
    params: memoIdSchema,
    detail: {
      tags: ["Memos"],
    },
  },
};
