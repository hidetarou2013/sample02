export default [
    {
        languageOptions: {
            globals: {
                console: "readonly",
                require: "readonly",
                process: "readonly",
                module: "readonly",
                exports: "readonly",
                __dirname: "readonly",
                __filename: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        }
    }
];