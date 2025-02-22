import { Stack, Link } from "expo-router";
import { View, Text, Platform } from "react-native";
import { styles } from "../theme/theme";
import { useEffect, useState } from "react";
import { FAB, Dialog } from "@rneui/themed";
import SearchBox from "../components/SearchBox";
import { useData } from "../context/SearchContext";
import MovieCard from "../components/MovieCard";
import { FlatList } from "react-native";
import RentBox from "../components/RentBox";
import { useMovie } from "../context/StorageContext";
import { KeyboardAvoidingView } from "react-native";

export default function Home() {
  const { rentedMovies, saveRentedMovies } = useMovie();
  const { listedMovies, searchKeyword } = useData();
  const [visible, setVisible] = useState(true);
  const [dialogState, setDialogState] = useState(false);
  const [isRentButton, setIsRentButton] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const toggleDialog = () => {
    setDialogState(!dialogState);
  };

  useEffect(() => {
    console.log("Number of rented movies:", rentedMovies.length);
  }, [rentedMovies]);

  return (
    <View style={styles.body}>
      <Stack.Screen
        options={{
          title: "CinemaDirect",
          headerRight: () => <Link href="rented">My Movies</Link>,
        }}
      />
      <Text style={styles.title}>Results for "{searchKeyword}"</Text>

      <FlatList
        style={styles.container.card}
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
                setIsRentButton(true);
                toggleDialog();
              }}
              setMovieSelected={setMovieSelected}
              source="listed"
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />

      <FAB
        visible={visible}
        icon={{ name: "search", color: "white" }}
        size="large"
        onPress={() => {
          setIsRentButton(false);
          toggleDialog();
        }}
        style={{ position: "absolute", bottom: 32, right: 32 }}
      />
      <Dialog
        isVisible={dialogState}
        onBackdropPress={toggleDialog}
        overlayStyle={styles.dialog}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        {isRentButton ? (
          <RentBox
            toggleDialog={toggleDialog}
            movieSelected={movieSelected}
            saveRentedMovies={saveRentedMovies}
          />
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
