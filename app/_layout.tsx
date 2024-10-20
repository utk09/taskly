import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Shopping List",
        }}
      />
      <Stack.Screen
        name="counter"
        options={{
          title: "Counter",
          presentation: "modal",
          animation: "slide_from_bottom", // not required, default is "slide_from_bottom" in ios
        }}
      />
      <Stack.Screen
        name="idea"
        options={{
          title: "Idea",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
