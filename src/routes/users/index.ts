import jwt from "@elysiajs/jwt";
import Elysia from "elysia";
import { signInUser } from "src/handlers/users/signInUser";
import { signUpUser } from "src/handlers/users/signUpUser";

export const users = new Elysia({ prefix: "/users" })
  .use(
    jwt({
      name: "jwt",
      secret: Bun.env.JWT_SECRET || "",
    })
  )
  .post("/", signUpUser.handler, signUpUser.hook)
  .post("/login", signInUser.handler, signInUser.hook);
