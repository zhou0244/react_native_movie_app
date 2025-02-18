import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Rented() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "My Movies",
        }}
      />
      <Text>My Movies</Text>
    </View>
  );
}
