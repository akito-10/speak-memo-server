import { t } from "elysia";
import { db } from "src";
import { CreateUserDto } from "src/dto/users/createUserDto";

export const createUser = {
  handler: async ({ body, jwt }: { body: CreateUserDto; jwt: any }) => {
    const user = await db.user.create({ data: body });

    if (!user) {
      throw new Error("Cannot create user");
    }

    const token = await jwt.sign(
      { id: user.id },
      {
        httpOnly: true,
        maxAge: 7 * 86400,
      }
    );

    return { token };
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
    detail: {
      tags: ["Users"],
    },
  },
};
