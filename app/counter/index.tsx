import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

import { theme } from "../../theme";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";

export default function CounterScreen() {
  const scheduleNotification = async () => {
    const result = await registerForPushNotificationsAsync();
    if (result === "granted") {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Hello",
          body: "This is a notification from taskly",
        },
        trigger: {
          seconds: 5,
        },
      });
    } else {
      if (Device.isDevice) {
        Alert.alert(
          "Permission Denied",
          "You need to enable notifications in your settings to use this feature.",
        );
      }
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={scheduleNotification}>
        <Text>Schedule Notification</Text>
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
  button: {
    backgroundColor: theme.colorLightGrey,
    padding: 12,
    fontSize: 18,
    borderRadius: 6,
    borderColor: theme.colorDarkGrey,
    borderWidth: 2,
    marginBottom: 50,
  },
});

// const navigation = useNavigation();
// onPress = {() => navigation.navigate("Idea")}
