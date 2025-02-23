import { Stack, Link } from "expo-router";
import { View, Text } from "react-native";
import { styles } from "../theme/style";
import { useEffect, useState } from "react";
import { FAB, Dialog } from "@rneui/themed";
import SearchBox from "../components/SearchBox";
import { useData } from "../context/SearchContext";
import MovieCard from "../components/MovieCard";
import { FlatList } from "react-native";
import RentBox from "../components/RentBox";
import { useMovie } from "../context/StorageContext";

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
          headerTitleStyle: { fontFamily: "RobotoSlab_Bold" },
          headerRight: () => <Link href="rented">My Movies</Link>,
        }}
      />

      <View style={{ paddingTop: 32, paddingBottom: 8 }}>
        <Text style={styles.subTitle}>
          Results for
          <Text style={{ color: "royalblue" }}> "{searchKeyword}"</Text>
        </Text>
      </View>

      <FlatList
        style={styles.container.card}
        data={listedMovies}
        renderItem={({ item }) => {
          const {
            id,
            title,
            original_language,
            release_date,
            vote_average,
            poster_path,
          } = item;
          return (
            <MovieCard
              id={id}
              title={title}
              language={original_language}
              year={release_date}
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
