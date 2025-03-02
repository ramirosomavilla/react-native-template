import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList, User } from "../types";
import { ROUTES } from "./routes";
import HomeScreen from "../screens/home/Home";
import Icon from "react-native-vector-icons/FontAwesome6";
import { useTheme } from "../hooks/useTheme";
import ProfileScreen from "../screens/home/Profile";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../screens/home/home-styles";
import { ToggleThemeButton } from "../components/ToggleThemeButton";
import { mockUser } from "../constants/mockedData";

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.TAB_HOME}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.TAB_PROFILE}
        component={() => (
          <ProfileScreen
            user={mockUser}
            onEditProfile={() => {}}
            onSignOut={() => {}}
          />
        )}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="circle-user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.TAB_HOME}
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="house" color={color} size={size} />
          ),
          header: () => (
            <SafeAreaView
              style={[
                styles.header,
                {
                  backgroundColor: colors.primary,
                },
              ]}
            >
              <View></View>
              <Text style={styles.cardTitle}>Let's ship!</Text>

              <ToggleThemeButton />
            </SafeAreaView>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.TAB_EXPLORE}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="magnifying-glass" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
