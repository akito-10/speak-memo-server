import { db } from "src";
import { CreateMemoDto, createMemoSchema } from "src/models/memos/createMemo";
import { UserType, userSchema } from "src/models/users/user";

export const createMemo = {
  handler: async ({ body, user }: { body: CreateMemoDto; user?: UserType }) => {
    if (!user) throw new Error("ユーザーが存在しません");

    return await db.memo.create({ data: { ...body, userId: user.id } });
  },
  hook: {
    body: createMemoSchema,
    user: userSchema,
    detail: {
      tags: ["Memos"],
    },
  },
};
