import { db } from "src";
import { SignupUserDto, signupUserSchema } from "src/models/users/signupUser";

export const signupUser = {
  handler: async ({
    body,
    jwt,
    cookie,
    setCookie,
  }: {
    body: SignupUserDto;
    jwt: any;
    cookie: any;
    setCookie: any;
  }) => {
    const user = await db.user.create({ data: body });

    if (!user) {
      throw new Error("Cannot create user");
    }

    setCookie("auth", await jwt.sign({ id: user.id }), {
      httpOnly: true,
      maxAge: 7 * 86400,
    });

    return { token: cookie.auth };
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
