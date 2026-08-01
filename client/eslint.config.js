// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const unusedImports = require("eslint-plugin-unused-imports");

module.exports = tseslint.config(
    {
        ignores: ["dist/**", "**/dist/**", ".angular/**", "cypress/**", "cypress.config.ts"]
    },
    {
        files: ["**/*.ts"],
        plugins: {
            "unused-imports": unusedImports
        },
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...angular.configs.tsRecommended
        ],
        processor: angular.processInlineTemplates,
        rules: {
            "quotes": [
                1,
                "double"
            ],
            "@angular-eslint/directive-selector": [
                "error",
                {
                    "type": "attribute",
                    "prefix": "lib",
                    "style": "camelCase"
                }
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    "type": "element",
                    "prefix": "lib",
                    "style": "kebab-case"
                }
            ],
            "@angular-eslint/prefer-inject": "off",
            "@angular-eslint/prefer-on-push-component-change-detection": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    "vars": "all",
                    "varsIgnorePattern": "^_",
                    "args": "after-used",
                    "argsIgnorePattern": "^_"
                }
            ]
        }
    },
    {
        files: ["projects/application/**/*.ts"],
        rules: {
            "@angular-eslint/directive-selector": [
                "error",
                {
                    "type": "attribute",
                    "prefix": "app",
                    "style": "camelCase"
                }
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    "type": "element",
                    "prefix": "app",
                    "style": "kebab-case"
                }
            ]
        }
    },
    {
        files: ["**/*.html"],
        extends: [
            ...angular.configs.templateRecommended
        ],
        rules: {}
    }
);
