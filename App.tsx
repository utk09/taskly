import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { AppStyles as styles } from "./App.styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Pressable
          style={styles.itemButton}
          onPress={() => console.log("Pressed")}
        >
          <Text style={styles.itemButtonText}>Delete</Text>
        </Pressable>
        <Text style={styles.itemText}>Coffee</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
