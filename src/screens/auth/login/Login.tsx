import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ROUTES } from "../../../navigation/routes";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { login } from "../../../store/slices/authSlice";
import { AuthNavProps } from "../../../types";

import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { useTheme } from "../../../hooks/useTheme";
import styles from "./styles";
import { ToggleThemeButton } from "../../../components/ToggleThemeButton";

const LoginScreen: React.FC<AuthNavProps<"Login">> = ({ navigation }) => {
  const [email, setEmail] = useState("usuario@ejemplo.com");
  const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const { colors } = useTheme();

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

        <ToggleThemeButton />

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
              icon: showPassword ? "eye-slash" : "eye",
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
