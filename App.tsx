import { StatusBar } from "expo-status-bar";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { AppStyles as styles } from "./App.styles";

export default function App() {
  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this item?", [
      {
        text: "Cancel",
        style: "cancel",
        onPress: () => console.log("Cancelled!"),
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => console.log("Deleting..."),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          style={styles.itemButton}
          onPress={() => handleDelete()}
          activeOpacity={0.8}
        >
          <Text style={styles.itemButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
