import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../theme";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";

export default function CounterScreen() {
  const handleRequestPermission = async () => {
    const result = await registerForPushNotificationsAsync();
    console.log({ result });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleRequestPermission}>
        <Text>Request Permission</Text>
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
