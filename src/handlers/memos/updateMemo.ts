import { db } from "src";
import { memoIdSchema } from "src/models/memos/memoParams";
import { UpdateMemoDto, updateMemoSchema } from "src/models/memos/updateMemo";
import { UserType, userSchema } from "src/models/users/user";
import { transformStringToNumberParamsId } from "src/utils/transformStringToNumberParamsId";

export const updateMemo = {
  handler: async ({
    params: { id },
    body,
    user,
  }: {
    params: { id: number };
    body: UpdateMemoDto;
    user?: UserType;
  }) => {
    if (!user) throw new Error("ユーザーが存在しません");

    return await db.memo.update({
      where: { id, userId: user.id },
      data: {
        ...body,
        updatedAt: new Date(),
      },
    });
  },
  hook: {
    transform: transformStringToNumberParamsId,
    user: userSchema,
    params: memoIdSchema,
    body: updateMemoSchema,
    detail: {
      tags: ["Memos"],
    },
  },
};
