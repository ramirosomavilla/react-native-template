import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  formContainer: {
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    paddingVertical: 8,
  },
  errorText: {
    color: "red",
    marginBottom: 16,
    textAlign: "center",
  },
  textLink: {
    alignSelf: "center",
    marginTop: 16,
  },
  footerContainer: {
    alignItems: "center",
    marginTop: 24,
  },
});
