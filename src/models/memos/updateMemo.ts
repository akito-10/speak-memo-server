import { Static } from "@sinclair/typebox";
import { t } from "elysia";

export const updateMemoSchema = t.Object({
  title: t.String(),
  content: t.String(),
});

export type UpdateMemoDto = Static<typeof updateMemoSchema>;
