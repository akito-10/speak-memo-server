import { Static } from "@sinclair/typebox";
import { t } from "elysia";

export const createMemoSchema = t.Object({
  title: t.String(),
  content: t.String(),
});

export type CreateMemoDto = Static<typeof createMemoSchema>;
