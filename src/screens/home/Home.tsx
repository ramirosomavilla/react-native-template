import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Card, CardContent, CardHeader } from "../../components/Card";
import { useTheme } from "../../hooks/useTheme";
import { styles } from "./home-styles";

const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.heroTitle, { color: colors.primary }]}>
          Your Dream App Starts Here
        </Text>
        <Text style={[styles.heroSubtitle, { color: colors.secondary }]}>
          Create stunning, high-performance apps effortlessly.
        </Text>

        <Card>
          <CardHeader>
            <Ionicons
              name="color-palette-outline"
              size={40}
              color={colors.primary}
              style={styles.icon}
            />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Eye-Catching Design
            </Text>
          </CardHeader>
          <CardContent>
            <Text style={[styles.cardText, { color: colors.text }]}>
              Vibrant colors and sleek animations that captivate your users at
              first sight.
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Try It Now</Text>
            </TouchableOpacity>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Ionicons
              name="flash-outline"
              size={40}
              color={colors.primary}
              style={styles.icon}
            />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Lightning Fast
            </Text>
          </CardHeader>
          <CardContent>
            <Text style={[styles.cardText, { color: colors.text }]}>
              Get your app up and running in minutes with zero hassle.
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Get Started</Text>
            </TouchableOpacity>
          </CardContent>
        </Card>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
