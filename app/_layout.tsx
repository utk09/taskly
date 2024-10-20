import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { theme } from "../theme";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorCerulean,
        tabBarInactiveTintColor: theme.colorDarkGrey,
      }}
    >
      <Tabs.Screen
        name="index" // This is the name of the file without the extension
        options={{
          title: "Shopping List",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="counter" // This is the name of the file without the extension
        options={{
          title: "Counter",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="clockcircleo" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome6 name="lightbulb" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
