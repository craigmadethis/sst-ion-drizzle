import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { db } from "../drizzle";
import { users } from "../drizzle/schema";

const app = new Hono().get("/", async (c) => {
  const rows = await db.select().from(users);
  return c.json({ rows });
});

export const handler = handle(app);
