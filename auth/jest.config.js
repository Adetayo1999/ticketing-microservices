/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  testMatch: ["<rootDir>/src/test/**/*(*.)+(test).+(ts)"],
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["./src/test/setup.ts"],
};
