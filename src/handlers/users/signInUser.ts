import { db } from "src";
import { SignInUserDto, signInUserSchema } from "src/models/users/signInUser";

export const signInUser = {
  handler: async ({
    body,
    jwt,
    cookie,
    setCookie,
  }: {
    body: SignInUserDto;
    jwt: any;
    cookie: any;
    setCookie: any;
  }) => {
    const user = await db.user.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      throw new Error("ユーザーが存在しません");
    }

    const isPasswordValid = await Bun.password.verify(
      body.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error("パスワードが間違っています");
    }

    setCookie("auth", await jwt.sign({ id: user.id }), {
      httpOnly: true,
      maxAge: 7 * 86400,
    });

    return { token: cookie.auth };
  },
  hook: {
    body: signInUserSchema,
    detail: {
      tags: ["Users"],
    },
  },
};
