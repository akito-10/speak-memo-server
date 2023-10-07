import { Static } from "@sinclair/typebox";
import { t } from "elysia";

export const signupUserSchema = t.Object({
  name: t.String(),
  email: t.String(),
  password: t.String(),
});

export type SignupUserDto = Static<typeof signupUserSchema>;
