import cookie from "@elysiajs/cookie";
import jwt from "@elysiajs/jwt";
import Elysia from "elysia";
import { createMemo } from "src/handlers/memos/createMemo";
import { deleteMemo } from "src/handlers/memos/deleteMemo";
import { getMemoById } from "src/handlers/memos/getMemoById";
import { getMemos } from "src/handlers/memos/getMemos";
import { updateMemo } from "src/handlers/memos/updateMemo";
import { checkAuth } from "src/utils/checkAuth";

export const memos = new Elysia({ prefix: "/memos" })
  .use(
    jwt({
      name: "jwt",
      secret: Bun.env.JWT_SECRET || "",
    })
  )
  .use(cookie())
  .derive(checkAuth)
  .guard({
    beforeHandle: [
      ({ user, set }) => {
        if (!user) {
          set.status = 401;
          return {
            message: "Unauthorized",
          };
        }
      },
    ],
  })
  .get("/", getMemos.handler, getMemos.hook)
  .get("/:id", getMemoById.handler, getMemoById.hook)
  .post("/", createMemo.handler, createMemo.hook)
  .put("/:id", updateMemo.handler, updateMemo.hook)
  .delete("/:id", deleteMemo.handler, deleteMemo.hook);
