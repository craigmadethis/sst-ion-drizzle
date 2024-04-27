/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "drizzle-sst3",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "eu-central-1",
        },
      },
    };
  },
  async run() {
    const db = new sst.aws.Postgres("TestDb", {
      scaling: {
        min: "0.5 ACU",
        max: "2 ACU",
      },
    });
    const hono = new sst.aws.Function("Hono", {
      url: true,
      handler: "index.handler",
      link: [db],
    });

    return {
      api: hono.url,
    };
  },
});
