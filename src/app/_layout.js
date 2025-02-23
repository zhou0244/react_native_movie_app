import { Stack } from "expo-router";
import { DataProvider } from "../context/SearchContext";
import { MovieProvider } from "../context/StorageContext";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ThemeProvider } from "@rneui/themed";
import { theme } from "../theme/theme";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 2000,
  fade: true,
});

export default function RootLayout({ children }) {
  const [loaded] = useFonts({
    RobotoSlab_Regular: require("../../assets/fonts/Roboto_Slab/RobotoSlab-Regular.ttf"),
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
    <ThemeProvider theme={theme}>
      <DataProvider>
        <MovieProvider>
          <Stack>{children}</Stack>
        </MovieProvider>
      </DataProvider>
    </ThemeProvider>
  );
}
