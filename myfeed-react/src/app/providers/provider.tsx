import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../api/clients";
import { ThemeProvider } from "./theme-provider";

export const withProviders = (Component: React.FC) => () =>
  (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <Component />
      </ThemeProvider>
    </ApolloProvider>
  );
