import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AuthNavProps } from "../../../types";
import { ROUTES } from "../../../navigation/routes";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { login } from "../../../store/slices/authSlice";

import styles from "./styles";
import { useTheme } from "../../../hooks/useTheme";
import { useTheme as useThemeContext } from "../../../contexts/ThemeContext";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import Icon from "react-native-vector-icons/FontAwesome6";

const LoginScreen: React.FC<AuthNavProps<"Login">> = ({ navigation }) => {
  const [email, setEmail] = useState("usuario@ejemplo.com");
  const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const { colors } = useTheme();
  const { toggleTheme, theme } = useThemeContext();

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      dispatch(login({ email, password }));
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: colors.background },
        ]}
      >
        <View style={styles.logoContainer}>
          <Text style={[styles.title, { color: colors.primary }]}>
            React Native Template App
          </Text>
        </View>
        <Button
          onPress={() => toggleTheme()}
          style={{ backgroundColor: colors.background }}
          loading={isLoading}
          disabled={isLoading}
        >
          {theme.dark ? (
            <Icon name="sun" size={24} />
          ) : (
            <Icon name="moon" size={24} />
          )}
        </Button>

        <View style={styles.formContainer}>
          {error && <Text style={styles.errorText}>{error}</Text>}

          <TextInput
            label="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            secureTextEntry={!showPassword}
            right={{
              icon: showPassword ? "eye-off" : "eye",
              onPress: () => setShowPassword(!showPassword),
            }}
          />

          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            loading={isLoading}
            disabled={isLoading}
          >
            Iniciar Sesión
          </Button>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTES.FORGOT_PASSWORD, { email })
            }
            style={styles.textLink}
          >
            <Text style={{ color: colors.primary }}>
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <Text style={{ color: colors.text }}>¿Aún no tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.REGISTER)}
            style={styles.textLink}
          >
            <Text style={{ color: colors.primary, fontWeight: "bold" }}>
              Regístrate
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
