import Elysia from "elysia";
import { createMemo } from "src/handlers/memos/createMemo";
import { getMemos } from "src/handlers/memos/getMemos";

export const memos = new Elysia({ prefix: "/memos" })
  .get("/", getMemos.handler)
  .post("/", createMemo.handler, createMemo.hook);
