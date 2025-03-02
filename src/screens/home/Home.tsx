import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./home-styles";
import { useTheme } from "../../hooks/useTheme";

const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.heroTitle, { color: colors.primary }]}>
          Your Dream App Starts Here
        </Text>
        <Text style={[styles.heroSubtitle, { color: colors.secondary }]}>
          Create stunning, high-performance apps effortlessly.
        </Text>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Ionicons
            name="color-palette-outline"
            size={40}
            color={colors.primary}
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Eye-Catching Design</Text>
          <Text style={styles.cardText}>
            Vibrant colors and sleek animations that captivate your users at
            first sight.
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Try It Now</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Ionicons
            name="flash-outline"
            size={40}
            color={colors.primary}
            style={styles.icon}
          />
          <Text style={styles.cardTitle}>Lightning Fast</Text>
          <Text style={styles.cardText}>
            Get your app up and running in minutes with zero hassle.
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
