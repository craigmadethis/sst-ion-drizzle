import { db } from ".";
import { migrate as migratePostgres } from "drizzle-orm/aws-data-api/pg/migrator";

export const migrate = async (path: string) => {
  console.log("Running migrations...");
  await migratePostgres(db, { migrationsFolder: path });
  console.log("Migrations completed.");
};
await migrate("./drizzle/migrations/");
