import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/counter" style={styles.navigation}>
        <Text>Go to Counter</Text>
      </Link>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" isCompleted />
      <ShoppingListItem name="Sugar" isCompleted />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    justifyContent: "center",
    padding: 4,
  },
  navigation: {
    textAlign: "center",
    marginBottom: 18,
    fontSize: 18,
  },
});
