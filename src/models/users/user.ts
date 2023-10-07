import { Static } from "@sinclair/typebox";
import { t } from "elysia";

export const userSchema = t.Object({
  id: t.Number(),
  name: t.String(),
  password: t.String(),
  email: t.String(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
});

export type UserType = Static<typeof userSchema>;
