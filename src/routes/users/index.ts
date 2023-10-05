import jwt from "@elysiajs/jwt";
import Elysia from "elysia";
import { createUser } from "src/handlers/users/createUser";
import { loginUser } from "src/handlers/users/loginUser";

export const users = new Elysia({ prefix: "/users" })
  .use(
    jwt({
      name: "jwt",
      secret: Bun.env.JWT_SECRET || "",
    })
  )
  .post("/", createUser.handler, createUser.hook)
  .post("/login", loginUser.handler, loginUser.hook);
