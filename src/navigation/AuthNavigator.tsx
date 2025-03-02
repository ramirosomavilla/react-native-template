import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthParamList } from "../types";
import { ROUTES } from "./routes";
import LoginScreen from "../screens/auth/login/Login";
import RegisterScreen from "../screens/auth/register/Register";
import { useTheme } from "../hooks/useTheme";
import { ToggleThemeButton } from "../components/ToggleThemeButton";
import { SafeAreaView, StatusBar } from "react-native";

const Stack = createStackNavigator<AuthParamList>();

const AuthNavigator: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <>
      <StatusBar />
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
          options={{
            header: () => (
              <SafeAreaView
                style={{
                  backgroundColor: colors.background,
                  alignItems: "flex-end",
                }}
              >
                <ToggleThemeButton style={{ marginRight: 16 }} />
              </SafeAreaView>
            ),
          }}
        />
        <Stack.Screen
          name={ROUTES.REGISTER}
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
