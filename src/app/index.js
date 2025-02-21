import { Stack, Link, useRouter } from "expo-router";
import { View, Text, Button, TextInput, Pressable } from "react-native";
import { styles } from "../theme/theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAB, Dialog } from "@rneui/themed";
import SearchBox from "../components/SearchBox";
import { useData } from "../context/SearchContext";
import MovieCard from "../components/MovieCard";
import { FlatList } from "react-native";
export default function Home() {
  const router = useRouter();
  const { movies, setMovies } = useData();
  const { hasMovie, setHasMovie } = useData();
  const [visible, setVisible] = useState(true);
  const [dialogState, setDialogState] = useState(false);

  // useEffect(() => {
  //   if (!hasMovie) {
  //     return;
  //   }
  //   toggleDialog();
  // }, [movies]);

  const toggleDialog = () => {
    setDialogState(!dialogState);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "CinemaDirect",
          headerRight: () => <Link href="rented">My Movies</Link>,
        }}
      />
      <Text style={styles.title}>Welcome to CinemaDirect</Text>

      <FlatList
        data={movies}
        renderItem={({ item }) => {
          const { id, title, vote_average, poster_path } = item;
          return (
            <MovieCard
              id={id}
              title={title}
              rate={vote_average}
              poster={poster_path}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />

      <FAB
        visible={visible}
        icon={{ name: "search", color: "white" }}
        size="small"
        onPress={toggleDialog}
      />

      <Dialog isVisible={dialogState} onBackdropPress={toggleDialog}>
        <SearchBox toggleDialog={toggleDialog} />
      </Dialog>
    </View>
  );
}

Home.options = {
  headerShown: false,
};
