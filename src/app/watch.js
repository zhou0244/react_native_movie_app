import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { styles } from "../theme/theme";

export default function Watch() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Watch",
          headerBackTitle: "Back",
        }}
      />
      <Text>Watching Movies</Text>
    </View>
  );
}
