module.exports = {
  partner: {
    input: "./api/openapi.json",
    output: {
      target: "./api/generated/index.ts",
      schemas: "./api/generated/models",
      client: "react-query",
      httpClient: "axios",
      mode: "tags",
    },
    hooks: {
      reactQuery: true,
    },
  },
};
