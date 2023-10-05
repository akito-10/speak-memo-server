import { t } from "elysia";
import { db } from "src";
import { CreateUserDto } from "src/dto/users/createUserDto";

export const createUser = {
  handler: async ({ body }: { body: CreateUserDto }) => {
    return await db.user.create({ data: body });
  },
  hook: {
    body: t.Object({
      name: t.String(),
      email: t.String(),
      password: t.String(),
    }),
    transform: async ({ body }: { body: CreateUserDto }) => {
      const password = await Bun.password.hash(body.password, {
        algorithm: "bcrypt",
        cost: 10,
      });

      body.password = password;
    },
  },
};
