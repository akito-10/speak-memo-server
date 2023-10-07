import { db } from "src";
import { memoIdSchema } from "src/models/memos/memoParams";
import { UpdateMemoDto, updateMemoSchema } from "src/models/memos/updateMemo";
import { transformStringToNumberParamsId } from "src/utils/transformStringToNumberParamsId";

export const updateMemo = {
  handler: async ({
    params: { id },
    body,
  }: {
    params: { id: number };
    body: UpdateMemoDto;
  }) => {
    return await db.memo.update({
      where: { id },
      data: {
        ...body,
        updatedAt: new Date(),
      },
    });
  },
  hook: {
    transform: transformStringToNumberParamsId,
    params: memoIdSchema,
    body: updateMemoSchema,
    detail: {
      tags: ["Memos"],
    },
  },
};
