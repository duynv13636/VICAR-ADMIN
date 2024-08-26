import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "react-router-dom"
import RootRouter from "./RootRoute/RootRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (_, query) => {
      if (query?.meta?.errorMessage) {
        console.error(query.meta.errorMessage as string);
      }
    },
  }),
});
function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
        {/* <RootRouter /> */}
        <RouterProvider router={RootRouter} />
      </QueryClientProvider>
    </>
  )
}

export default App
