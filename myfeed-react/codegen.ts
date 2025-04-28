import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    "https://internship-social-media.purrweb.com/graphql": {
      headers: {
        "Content-Type": "application/json",
      },
    },
  },
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/shared/__generated__/": {
      preset: "client-preset",
    },
    "./src/shared/__generated__/hooks.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        gqlImport: "@apollo/client#gql",
        reactApolloVersion: 3,
        skipTypename: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
