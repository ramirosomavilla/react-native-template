import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  cardText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  ctaButton: {
    backgroundColor: "#ff6f61",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  ctaButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
