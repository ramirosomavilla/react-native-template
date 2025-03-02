import { Provider } from "react-redux";
import { useTheme } from "./contexts/ThemeContext";
import { ThemeProvider } from "./contexts/ThemeProvider";
import AppNavigator from "./navigation/AppNavigator";
import { store } from "./store";

export default function App() {
  const { theme } = useTheme();
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
}
