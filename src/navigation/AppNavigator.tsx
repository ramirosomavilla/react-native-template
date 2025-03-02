import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootParamList } from "../types";
import { ROUTES } from "./routes";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { useAppSelector } from "../store/hooks";

const Stack = createStackNavigator<RootParamList>();

const AppNavigator: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name={ROUTES.MAIN} component={MainNavigator} />
        ) : (
          <Stack.Screen name={ROUTES.AUTH} component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
