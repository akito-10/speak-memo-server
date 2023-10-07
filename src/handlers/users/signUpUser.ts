import { db } from "src";
import { SignupUserDto, signupUserSchema } from "src/models/users/signupUser";

export const signupUser = {
  handler: async ({ body, jwt }: { body: SignupUserDto; jwt: any }) => {
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
    body: signupUserSchema,
    transform: async ({ body }: { body: SignupUserDto }) => {
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
