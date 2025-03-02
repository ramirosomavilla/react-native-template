import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainParamList } from "../types";
import { ROUTES } from "./routes";
import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/home/Profile";
import SettingsScreen from "../screens/settings/Settings";
import { mockUser } from "../constants/mockedData";

const Stack = createStackNavigator<MainParamList>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen
        name={ROUTES.HOME}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={() => (
          <ProfileScreen
            user={mockUser}
            onEditProfile={() => {}}
            onSignOut={() => {}}
          />
        )}
        options={({ route }) => ({ title: `Perfil de ${route.params.userId}` })}
      />
      <Stack.Screen
        name={ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{ title: "Configuración" }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
