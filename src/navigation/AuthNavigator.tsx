import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthParamList } from "../types";
import { ROUTES } from "./routes";
import LoginScreen from "../screens/auth/login/Login";
import RegisterScreen from "../screens/auth/register/Register";
import { useTheme } from "../hooks/useTheme";

const Stack = createStackNavigator<AuthParamList>();

const AuthNavigator: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
