import "sst"
declare module "sst" {
  export interface Resource {
    TestDb: {
      secretArn: string
      type: "sst.aws.Postgres"
      clusterArn: string
      database: string
    }
  }
}
export {}