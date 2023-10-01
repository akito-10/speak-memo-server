import Elysia from "elysia";

export const memos = new Elysia({ prefix: "/memos" })
  .get("/", () => {})
  .post("/", () => "Create a memo");
