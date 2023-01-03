export default function (wallaby) {
  return {
    files: [
      "package.json",
      "packages/*/src/**/*.ts",
      {
        pattern: "packages/*/src/**/test/**/*.test.ts",
        ignore: true,
      },
    ],
    tests: ["packages/*/src/**/test/**/*.test.ts"],
    env: {
      type: "node",
      params: {
        env: "NODE_ENV=test",
      },
    },
    trace: true,
    testFramework: "mocha",
  };
}
