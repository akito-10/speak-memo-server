import Elysia from "elysia";
import { createUser } from "src/handlers/users/createUser";

export const users = new Elysia({ prefix: "/users" }).post(
  "/",
  createUser.handler,
  createUser.hook
);
