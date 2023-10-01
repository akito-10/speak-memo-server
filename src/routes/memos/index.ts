import Elysia from "elysia";
import { getMemos } from "src/handlers/memos/getMemos";

export const memos = new Elysia({ prefix: "/memos" })
  .get("/", getMemos.handler)
  .post("/", () => "Create a memo");
