import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UiKit } from "./pages/ui-kit/ui-kit";
import { Authorization } from "./pages/authorization/authorization";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ui-kit",
    element: <UiKit />,
  },
  {
    path: "/authorization",
    element: <Authorization />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
