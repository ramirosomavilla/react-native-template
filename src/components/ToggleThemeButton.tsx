import Icon from "react-native-vector-icons/FontAwesome6";
import { useTheme as useThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button onPress={() => toggleTheme()}>
      {theme.dark ? (
        <Icon name="sun" size={24} />
      ) : (
        <Icon name="moon" size={24} />
      )}
    </Button>
  );
};
