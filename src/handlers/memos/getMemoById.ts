import { db } from "src";
import { memoIdSchema } from "src/models/memos/memoParams";
import { UserType, userSchema } from "src/models/users/user";
import { transformStringToNumberParamsId } from "src/utils/transformStringToNumberParamsId";

export const getMemoById = {
  handler: async ({
    params: { id },
    user,
  }: {
    params: { id: number };
    user?: UserType;
  }) => {
    if (!user) throw new Error("ユーザーが存在しません");
    const memo = await db.memo.findUnique({ where: { id, userId: user.id } });

    if (!memo) throw new Error("該当するメモが存在しません");
    return memo;
  },
  hook: {
    transform: transformStringToNumberParamsId,
    user: userSchema,
    params: memoIdSchema,
    detail: {
      tags: ["Memos"],
    },
  },
};
