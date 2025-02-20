import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DataProvider } from "../context/SearchContext";

export default function RootLayout({ children }) {
  return (
    <DataProvider>
      <Stack>{children}</Stack>
    </DataProvider>
  );
}
