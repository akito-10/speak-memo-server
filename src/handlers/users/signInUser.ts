import { t } from "elysia";
import { db } from "src";
import { SignInUserDto } from "src/dto/users/signInUserDto";

export const signInUser = {
  handler: async ({ body, jwt }: { body: SignInUserDto; jwt: any }) => {
    const user = await db.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await Bun.password.verify(
      body.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid password");
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
      email: t.String(),
      password: t.String(),
    }),
    detail: {
      tags: ["Users"],
    },
  },
};