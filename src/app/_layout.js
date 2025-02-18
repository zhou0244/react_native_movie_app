import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "../theme/theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            title: "CinemaDirect",
            headerTitleStyle: styles.logo,
            headerRight: () => (
              <Pressable onPress={() => console.log("Pressed")}>
                <Text>My Movies</Text>
              </Pressable>
            ),
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
