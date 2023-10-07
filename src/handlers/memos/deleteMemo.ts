import { db } from "src";
import { memoIdSchema } from "src/models/memos/memoParams";
import { transformStringToNumberParamsId } from "src/utils/transformStringToNumberParamsId";

export const deleteMemo = {
  handler: async ({ params: { id } }: { params: { id: number } }) => {
    return await db.memo.delete({ where: { id } });
  },
  hook: {
    transform: transformStringToNumberParamsId,
    params: memoIdSchema,
    detail: {
      tags: ["Memos"],
    },
  },
};
