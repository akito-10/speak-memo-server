import { t } from "elysia";
import { db } from "src";
import { UpdateMemoDto } from "src/dto/memos/updateMemoDto";
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
    params: t.Object({
      id: t.Number(),
    }),
    body: t.Object({
      title: t.String(),
      content: t.String(),
    }),
    detail: {
      tags: ["Memos"],
    },
  },
};
