import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../api/clients";

export const withProviders = (Component: React.FC) => () =>
  (
    <ApolloProvider client={apolloClient}>
      <Component />
    </ApolloProvider>
  );
