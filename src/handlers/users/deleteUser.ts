import { db } from "src";

export const deleteUser = {
  handler: async ({ cookie, jwt }: { cookie: any; jwt: any }) => {
    const user = await jwt.verify(cookie.auth);

    return await db.user.delete({
      where: user,
    });
  },
  hook: {
    detail: {
      tags: ["Users"],
    },
  },
};
