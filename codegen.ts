import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    generates: {
        "./src/__generated__/payload/": {
            documents: ["src/graphql/payload/*.{ts,tsx}"],
            schema: "http://127.0.0.1:3020/api/graphql",
            preset: "client",
            plugins: [],
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;
