import { ScrollView, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { ShoppingListItem } from "../components/ShoppingListItem";
import { theme } from "../theme";

type ShoppingListItemType = {
  id: string;
  name: string;
};

const initialList: ShoppingListItemType[] = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Sugar" },
  { id: "4", name: "Milk" },
  { id: "5", name: "Bread" },
  { id: "6", name: "Butter" },
  { id: "7", name: "Orange" },
  { id: "8", name: "Cheese" },
  { id: "9", name: "Salt" },
  { id: "10", name: "Pepper" },
  { id: "11", name: "Apple" },
  { id: "12", name: "Banana" },
  { id: "13", name: "Pasta" },
  { id: "14", name: "Rice" },
];

export default function App() {
  const [value, setValue] = useState("");
  const [shoppingList, setShoppingList] =
    useState<ShoppingListItemType[]>(initialList);

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: Date.now().toString(), name: value },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue("");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
      <TextInput
        style={styles.textInput}
        placeholder="Add item"
        value={value}
        onChangeText={setValue}
        keyboardType="default"
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingList.map((item) => (
        <ShoppingListItem key={item.id} name={item.name} />
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    borderColor: theme.colorDarkGrey,
    backgroundColor: theme.colorWhite,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
  },
});
