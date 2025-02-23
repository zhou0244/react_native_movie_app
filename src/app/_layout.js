import { Stack } from "expo-router";
import { DataProvider } from "../context/SearchContext";
import { MovieProvider } from "../context/StorageContext";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ThemeProvider } from "@rneui/themed";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout({ children }) {
  const [loaded] = useFonts({
    RobotoSlab_SemiBold: require("../../assets/fonts/Roboto_Slab/RobotoSlab-SemiBold.ttf"),
    RobotoSlab_Bold: require("../../assets/fonts/Roboto_Slab/RobotoSlab-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <DataProvider>
        <MovieProvider>
          <Stack>{children}</Stack>
        </MovieProvider>
      </DataProvider>
    </ThemeProvider>
  );
}
