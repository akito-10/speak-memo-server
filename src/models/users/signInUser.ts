import { Static } from "@sinclair/typebox";
import { t } from "elysia";

export const signInUserSchema = t.Object({
  email: t.String(),
  password: t.String(),
});

export type SignInUserDto = Static<typeof signInUserSchema>;
