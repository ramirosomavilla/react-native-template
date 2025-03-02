import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthParamList } from "../types";
import { ROUTES } from "./routes";
import LoginScreen from "../screens/auth/login/Login";
import RegisterScreen from "../screens/auth/register/Register";
import { colors } from "../styles/colors";

const Stack = createStackNavigator<AuthParamList>();

const AuthNavigator: React.FC = () => {
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
        options={{ title: "Iniciar Sesión" }}
      />
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={RegisterScreen}
        options={{ title: "Registrarse" }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
