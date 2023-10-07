import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { memos } from "./routes/memos";
import { PrismaClient } from "@prisma/client";
import { users } from "./routes/users";

export const db = new PrismaClient();

const app = new Elysia()
  .onError(({ code, error, set }) => {
    if (code === "NOT_FOUND") {
      set.status = 404;
      return `ルートが存在しません: ${error.message}`;
    }

    return `なんらかのエラーが発生しました: ${error.message}`;
  })
  .use(swagger())
  .use(memos)
  .use(users)
  .listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
