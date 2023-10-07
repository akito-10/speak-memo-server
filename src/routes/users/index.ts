import cookie from "@elysiajs/cookie";
import jwt from "@elysiajs/jwt";
import Elysia from "elysia";
import { deleteUser } from "src/handlers/users/deleteUser";
import { signInUser } from "src/handlers/users/signInUser";
import { signupUser } from "src/handlers/users/signupUser";

export const users = new Elysia({ prefix: "/users" })
  .use(
    jwt({
      name: "jwt",
      secret: Bun.env.JWT_SECRET || "",
    })
  )
  .use(cookie())
  .post("/", signupUser.handler, signupUser.hook)
  .post("/login", signInUser.handler, signInUser.hook)
  .delete("/delete", deleteUser.handler, deleteUser.hook);
