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
import RentBox from "../components/RentBox";
export default function Home() {
  const router = useRouter();
  const { listedMovies, setListedMovies } = useData();
  const [visible, setVisible] = useState(true);
  const [dialogState, setDialogState] = useState(false);
  const [rented, setRented] = useState(false);

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
        data={listedMovies}
        renderItem={({ item }) => {
          const { id, title, vote_average, poster_path } = item;
          return (
            <MovieCard
              id={id}
              title={title}
              rate={vote_average}
              poster={poster_path}
              toggleDialog={() => {
                setRented(true);
                toggleDialog();
              }}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />

      <FAB
        visible={visible}
        icon={{ name: "search", color: "white" }}
        size="small"
        onPress={() => {
          setRented(false);
          toggleDialog();
        }}
      />

      <Dialog isVisible={dialogState} onBackdropPress={toggleDialog}>
        {rented ? (
          <RentBox toggleDialog={toggleDialog} />
        ) : (
          <SearchBox toggleDialog={toggleDialog} />
        )}
      </Dialog>
    </View>
  );
}

Home.options = {
  headerShown: false,
};
