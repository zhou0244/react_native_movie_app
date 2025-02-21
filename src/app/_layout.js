import { Stack } from "expo-router";
import { DataProvider } from "../context/SearchContext";
import { MovieProvider } from "../context/StorageContext";

export default function RootLayout({ children }) {
  return (
    <DataProvider>
      <MovieProvider>
        <Stack>{children}</Stack>
      </MovieProvider>
    </DataProvider>
  );
}
