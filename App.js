import Navigation from "./src/routes";
import { Provider } from "react-redux";
import redux from "./src/redux";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={redux}>
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </NativeBaseProvider>
    </Provider>
  );
}
