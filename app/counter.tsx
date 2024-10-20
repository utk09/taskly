import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CounterScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.navigate("/idea")}>
        <Text style={styles.navigation}>Go to Idea</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Counter Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  navigation: {
    textAlign: "center",
    marginBottom: 18,
    fontSize: 18,
  },
});

// onPress={() => navigation.navigate("Idea")}
