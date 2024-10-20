import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted = false }: Props) {
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
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={[
          styles.itemButton,
          isCompleted ? styles.completedButton : undefined,
        ]}
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
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  completedButton: {
    backgroundColor: theme.colorDarkGrey,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: theme.colorDarkGrey,
    fontWeight: 200,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 400,
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
