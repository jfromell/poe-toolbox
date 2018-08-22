"use strict";

module.exports = {
    collectCoverageFrom: [
        "**/packages/*/**/*.ts",
        "!**/__tests__/**"
    ],
    coverageReporters: ["json"],
    modulePathIgnorePatterns: [

    ],
    projects: ["<rootDir>"],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/lib/"
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js"
    ],
    testMatch: [
        "**/packages/*/**/__tests__/*.+(ts|tsx)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    globals: {
        "ts-jest": {
            "tsConfigFile": "tsconfig.json"
        }
    }
}