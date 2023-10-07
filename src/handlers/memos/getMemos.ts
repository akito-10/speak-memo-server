import { db } from "src";
import { UserType, userSchema } from "src/models/users/user";

export const getMemos = {
  handler: async ({ user }: { user?: UserType }) => {
    if (!user) throw new Error("ユーザーが存在しません");

    return await db.memo.findMany({ where: { userId: user.id } });
  },
  hook: {
    user: userSchema,
    detail: {
      tags: ["Memos"],
    },
  },
};
