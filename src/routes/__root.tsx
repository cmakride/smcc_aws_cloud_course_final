import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SiteHeader } from "../components/SiteHeader";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme-base.ts";

export const Route = createRootRouteWithContext()({
  component: () => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="min-h-screen">
          <SiteHeader />
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Outlet />
          </main>
          <TanStackRouterDevtools />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  ),
});
