module.exports = {
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!<rootDir>/node_modules/"],
  modulePaths: ["src/"],
  reporters: [
    "default",
    [
      "jest-junit",
      { suiteName: "jest", outputDirectory: "<rootDir>/tmp/test-results" },
    ],
  ],
  transformIgnorePatterns: ["node_modules[/\\\\](?!@amcharts[/\\\\]amcharts4)"],
  testPathIgnorePatterns: ["node_modules"],
  testTimeout: 10000,
  testEnvironment: "jest-environment-node",
  transform: {},
}
