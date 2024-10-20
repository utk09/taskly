import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
};

export function ShoppingListItem({
  name,
  isCompleted = false,
  onDelete,
}: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Delete ${name}?`,
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => onDelete(),
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
      <TouchableOpacity onPress={() => handleDelete()} activeOpacity={0.8}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorDarkGrey : theme.colorDanger}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
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
});
