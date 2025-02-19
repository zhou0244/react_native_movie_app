import { Stack, Link, useRouter } from "expo-router";
import { View, Text, Button, TextInput, Pressable } from "react-native";
import { styles } from "../theme/theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAB, Dialog } from "@rneui/themed";
import SearchBox from "../components/SearchBox";
import { DataProvider } from "../context/SearchContext";
import MovieCard from "../components/MovieCard";

const api_key = "d3fd8fcc6b8b585756b3191fba50333d";
const api_token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2ZkOGZjYzZiOGI1ODU3NTZiMzE5MWZiYTUwMzMzZCIsIm5iZiI6MTcxMDc5ODI4My43NzcsInN1YiI6IjY1ZjhiNWNiYWFmODk3MDE0ODJjZjUwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.reksCWgvLF-iXkmw2C71iB2kTM905PHTvc9CV50TnPo";

export default function Home() {
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const [dialogState, setDialogState] = useState(false);

  const url = `https://api.themoviedb.org/3/movie/11?api_key=${api_key}`;

  useEffect(() => {}, []);

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      console.log("Fetching...");
      const data = await response.json();
    } catch (err) {
      console.error(err);
    }
  };

  const saveToStorage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log("String value:", value);
      await AsyncStorage.setItem("my-users", jsonValue);
      const users = JSON.parse(jsonValue);
      setUserCount(users.length);
    } catch (err) {
      console.error(err);
    }
  };

  const getStorageData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("my-users");
      if (jsonValue !== null) {
        console.log("Users found...");
        const users = JSON.parse(jsonValue);
        setUserCount(users.length);
        setHasData(true);
        return users;
      } else {
        console.log("No data found...");
        return fetchMovies(url);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      setHasData(false);
    } catch (err) {
      console.error(err);
    }
    console.log("User list cleared...");
  };

  const toggleDialog = () => {
    setDialogState(!dialogState);
  };

  return (
    <DataProvider>
      <View style={styles.container}>
        <Stack.Screen
          options={{
            title: "CinemaDirect",
            headerRight: () => <Link href="rented">My Movies</Link>,
          }}
        />
        <Text style={styles.title}>Welcome to CinemaDirect</Text>

        <MovieCard />

        <FAB
          visible={visible}
          icon={{ name: "search", color: "white" }}
          size="small"
          onPress={toggleDialog}
        />

        <Dialog isVisible={dialogState} onBackdropPress={toggleDialog}>
          <SearchBox />
        </Dialog>
      </View>
    </DataProvider>
  );
}

Home.options = {
  headerShown: false,
};
