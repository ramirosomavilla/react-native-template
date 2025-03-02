import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { Card, CardContent, CardHeader } from "../../components/Card";
import { Avatar } from "../../components/Avatar";
import { useTheme } from "../../hooks/useTheme";
import { styles } from "./profile-styles";
import { User } from "../../types";

interface ProfileScreenProps {
  user: User;
  onEditProfile: () => void;
  onSignOut: () => void;
}

const ProfileScreen = ({
  user,
  onEditProfile,
  onSignOut,
}: ProfileScreenProps) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Avatar source={user.avatar} name={user.name} size={120} />
          <Text style={[styles.userName, { color: colors.text }]}>
            {user.name}
          </Text>
          <Text style={[styles.userEmail, { color: colors.secondary }]}>
            {user.email}
          </Text>
        </View>

        <Card>
          <CardHeader>
            <Ionicons
              name="person-outline"
              size={40}
              color={colors.primary}
              style={styles.icon}
            />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Account Information
            </Text>
          </CardHeader>
          <CardContent>
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.secondary }]}>
                ID
              </Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>
                {user.id}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.secondary }]}>
                Name
              </Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>
                {user.name}
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.secondary }]}>
                Email
              </Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>
                {user.email}
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.ctaButton, { backgroundColor: colors.primary }]}
              onPress={onEditProfile}
            >
              <Text style={styles.ctaButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Ionicons
              name="settings-outline"
              size={40}
              color={colors.primary}
              style={styles.icon}
            />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Account Settings
            </Text>
          </CardHeader>
          <CardContent>
            <Text style={[styles.cardText, { color: colors.text }]}>
              Manage your account settings and preferences.
            </Text>
            <TouchableOpacity
              style={[styles.ctaButton, { backgroundColor: colors.primary }]}
            >
              <Text style={styles.ctaButtonText}>Settings</Text>
            </TouchableOpacity>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Ionicons
              name="log-out-outline"
              size={40}
              color={colors.error || "#ff4757"}
              style={styles.icon}
            />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Sign Out
            </Text>
          </CardHeader>
          <CardContent>
            <Text style={[styles.cardText, { color: colors.text }]}>
              Sign out from your account. You can sign in again anytime.
            </Text>
            <TouchableOpacity
              style={[
                styles.signOutButton,
                { borderColor: colors.error || "#ff4757" },
              ]}
              onPress={onSignOut}
            >
              <Text
                style={[
                  styles.signOutButtonText,
                  { color: colors.error || "#ff4757" },
                ]}
              >
                Sign Out
              </Text>
            </TouchableOpacity>
          </CardContent>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
