import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { ThemeProvider } from "./contexts/ThemeProvider";
import AppNavigator from "./navigation/AppNavigator";
import { store } from "./store";
import { lightTheme } from "./styles/theme";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PaperProvider theme={lightTheme}>
          <AppNavigator />
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
}
