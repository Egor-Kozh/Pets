import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const tokenVar = makeVar<string | null>(null);

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = tokenVar() || localStorage.getItem("authToken");

  return {
    headers: {
      ...headers,
      "Content-Type": "application/json",
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            keyArgs: (args) => {
              if (!args?.input) return false;
              const { type, limit } = args.input;
              return `type:${type}-limit:${limit}`;
            },

            merge(existing = { data: [] }, incoming) {
              const mergedData = existing.data ? existing.data.slice(0) : [];

              if (incoming?.data) {
                mergedData.push(...incoming.data);
              }

              return {
                ...incoming,
                data: mergedData,
              };
            },
          },
          myPosts: {
            keyArgs: (args) => {
              if (!args?.input) return false;
              const { type, limit } = args.input;
              return `type:${type}-limit:${limit}`;
            },

            merge(existing = { data: [] }, incoming) {
              const mergedData = existing.data ? existing.data.slice(0) : [];

              if (incoming?.data) {
                mergedData.push(...incoming.data);
              }

              return {
                ...incoming,
                data: mergedData,
              };
            },
          },
        },
      },
    },
  }),
});
