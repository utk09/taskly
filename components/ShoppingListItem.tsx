import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
};

export function ShoppingListItem({ name }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Delete ${name}?`,
      "Are you sure you want to delete this item?",
      [
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
      ],
    );
  };
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity
        style={styles.itemButton}
        onPress={() => handleDelete()}
        activeOpacity={0.8}
      >
        <Text style={styles.itemButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f",
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    fontWeight: 200,
  },
  itemButton: {
    backgroundColor: theme.colorDanger,
    padding: 8,
    borderRadius: 4,
  },
  itemButtonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
