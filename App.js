import Navigation from "./src/routes";
import { Provider } from "react-redux";
import redux from "./src/redux";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
      <Provider store={redux}>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </Provider>
  );
}
