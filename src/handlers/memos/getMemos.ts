import { MEMOS } from "src/db/memo";

export const getMemos = {
  handler: () => {
    return MEMOS;
  },
};
