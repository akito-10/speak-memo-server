import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { memos } from "./routes/memos";

const app = new Elysia().use(swagger()).use(memos).listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
