import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "../theme/theme";

export default function RootLayout({ children }) {
  return <Stack>{children}</Stack>;
}
