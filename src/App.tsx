import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { ThemeProvider } from "./contexts/ThemeProvider";
import AppNavigator from "./navigation/AppNavigator";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
}
