import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import { useTheme } from "../../../hooks/useTheme";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { register } from "../../../store/slices/authSlice";
import { AuthNavProps } from "../../../types";
import styles from "./styles";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";

const RegisterScreen: React.FC<AuthNavProps<"Register">> = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", show: false });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    show: false,
  });
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const { colors } = useTheme();

  const handleRegister = () => {
    if (
      email.trim() &&
      password.value.trim() &&
      confirmPassword.value.trim() === password.value.trim() &&
      name.trim()
    ) {
      dispatch(
        register({
          name,
          email,
          password: password.value,
          confirmPassword: confirmPassword.value,
        })
      );
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

        <View style={styles.formContainer}>
          {error && <Text style={styles.errorText}>{error}</Text>}

          <TextInput
            label="Nombre"
            value={name}
            onChangeText={setName}
            style={styles.input}
            mode="outlined"
            autoCapitalize="none"
          />

          <TextInput
            label="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            label="Contraseña"
            value={password.value}
            onChangeText={(value) =>
              setPassword({ value, show: password.show })
            }
            style={styles.input}
            mode="outlined"
            secureTextEntry={!password.show}
            right={{
              icon: password.show ? "eye-off" : "eye",
              onPress: () =>
                setPassword({ value: password.value, show: !password.show }),
            }}
          />

          <TextInput
            label="Repetir contraseña"
            value={confirmPassword.value}
            onChangeText={(value) =>
              setConfirmPassword({ value, show: confirmPassword.show })
            }
            style={styles.input}
            mode="outlined"
            secureTextEntry={!confirmPassword.show}
            right={{
              icon: confirmPassword.show ? "eye-off" : "eye",
              onPress: () =>
                setConfirmPassword({
                  value: confirmPassword.value,
                  show: !confirmPassword.show,
                }),
            }}
          />

          <Button
            mode="contained"
            onPress={handleRegister}
            style={styles.button}
            loading={isLoading}
            disabled={isLoading}
          >
            Crear cuenta
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
