import { withProviders } from "./providers/provider";
import { AppRouter } from "./router";

export const App = withProviders(() => {
  return <AppRouter />;
});
