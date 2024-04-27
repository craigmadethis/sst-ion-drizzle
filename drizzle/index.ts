import { drizzle } from "drizzle-orm/aws-data-api/pg";
import { RDSDataClient } from "@aws-sdk/client-rds-data";
import { Resource as SSTResource } from "sst";
import * as schema from "./schema";

const rdsClient = new RDSDataClient({});

export const db = drizzle(rdsClient, {
  database: SSTResource.TestDb.database,
  secretArn: SSTResource.TestDb.secretArn,
  resourceArn: SSTResource.TestDb.clusterArn,
  schema,
});
