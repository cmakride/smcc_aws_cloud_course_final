import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "@tanstack/react-router";

// Create a new router instance
import { router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

const InnerApp = () => {
  return <RouterProvider router={router} />;
};

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <InnerApp />
      </QueryClientProvider>
    </StrictMode>,
  );
}
