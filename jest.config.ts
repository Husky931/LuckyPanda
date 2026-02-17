import type { Config } from "jest"
import nextJest from "next/jest"

const createJestConfig = nextJest({
    dir: "./"
})

const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    watchman: false,
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1"
    },
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    collectCoverageFrom: ["app/lib/**/*.ts", "app/api/**/*.ts", "!**/*.d.ts"]
}

export default createJestConfig(config)
