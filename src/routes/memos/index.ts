import Elysia from "elysia";
import { createMemo } from "src/handlers/memos/createMemo";
import { getMemoById } from "src/handlers/memos/getMemoById";
import { getMemos } from "src/handlers/memos/getMemos";
import { updateMemo } from "src/handlers/memos/updateMemo";

export const memos = new Elysia({ prefix: "/memos" })
  .get("/", getMemos.handler)
  .get("/:id", getMemoById.handler, getMemoById.hook)
  .post("/", createMemo.handler, createMemo.hook)
  .put("/:id", updateMemo.handler, updateMemo.hook);
