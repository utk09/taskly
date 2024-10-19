import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    justifyContent: "center",
    padding: 16,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 200,
  },
  itemButton: {
    backgroundColor: "crimson",
    padding: 8,
    borderRadius: 4,
  },
  itemButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
