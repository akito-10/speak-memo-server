import { db } from "src";

export const checkAuth = async ({ cookie, jwt }: { cookie: any; jwt: any }) => {
  if (!cookie?.auth) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const authUser = await jwt.verify(cookie.auth);
  if (!authUser) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const user = await db.user.findUnique({ where: { id: authUser.id } });
  if (!user) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  return {
    success: true,
    message: "Authorized",
    user,
  };
};
