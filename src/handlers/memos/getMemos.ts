import { db } from "src";

export const getMemos = {
  handler: async () => {
    return await db.memo.findMany();
  },
  hook: {
    detail: {
      tags: ["Memos"],
    },
  },
};
