import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    paddingVertical: 32,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  userEmail: {
    fontSize: 16,
    marginTop: 4,
  },
  icon: {
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 16,
  },
  ctaButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  ctaButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  signOutButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  signOutButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
