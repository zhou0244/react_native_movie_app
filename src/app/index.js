import { Stack, Link } from "expo-router";
import { View, Text, Image } from "react-native";
import { styles } from "../theme/style";
import { useEffect, useState } from "react";
import { FAB, Dialog } from "@rneui/themed";
import SearchBox from "../components/SearchBox";
import { useData } from "../context/SearchContext";
import MovieCard from "../components/MovieCard";
import { FlatList } from "react-native";
import RentBox from "../components/RentBox";
import { useMovie } from "../context/StorageContext";
import { theme } from "../theme/theme";

export default function Home() {
  // Custom hooks to access movie and search data from context
  const { rentedMovies, saveRentedMovies } = useMovie();
  const { listedMovies, searchKeyword } = useData();

  // State management for UI elements
  const [visible, setVisible] = useState(true);
  const [dialogState, setDialogState] = useState(false);
  const [isRentButton, setIsRentButton] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  // Toggle dialog visibility
  const toggleDialog = () => {
    setDialogState(!dialogState);
  };

  // Debug log for rented movies
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

      {searchKeyword ? (
        <View style={{ paddingTop: 24 }}>
          <Text style={[styles.subTitle, { paddingBottom: 8 }]}>
            Results for
            <Text style={{ color: "royalblue" }}> "{searchKeyword}"</Text>
          </Text>
          <FlatList
            contentContainerStyle={styles.cardList}
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
        </View>
      ) : (
        <View
          style={{
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Text style={[styles.title]}>Welcome to{"\n"}The Best Movie App</Text>
          <Text
            style={[styles.subTitle, { color: theme.darkColors.secondary }]}
          >
            Tap the icon to search
          </Text>

          <Image
            source={require("../../assets/undraw_home-cinema_jdm1.png")}
            style={{ height: 320, width: "100%" }}
            resizeMode="contain"
          />
        </View>
      )}

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
