import { db } from "src";
import { memoIdSchema } from "src/models/memos/memoParams";
import { UserType, userSchema } from "src/models/users/user";
import { transformStringToNumberParamsId } from "src/utils/transformStringToNumberParamsId";

export const deleteMemo = {
  handler: async ({
    params: { id },
    user,
  }: {
    params: { id: number };
    user?: UserType;
  }) => {
    if (!user) throw new Error("ユーザーが存在しません");

    return await db.memo.delete({ where: { id, userId: user.id } });
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
