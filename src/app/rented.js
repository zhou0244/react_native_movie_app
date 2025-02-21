import { Link, Stack } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { styles } from "../theme/theme";
import { useMovie } from "../context/StorageContext";
import MovieCard from "../components/MovieCard";

export default function Rented() {
  const { rentedMovies, setRentedMovies } = useMovie();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "My Movies",
          headerBackTitle: "Back",
        }}
      />
      <Text>My Movies</Text>
      <Link href="watch">Watch</Link>

      <FlatList
        data={rentedMovies}
        renderItem={({ item }) => {
          const { id, title, vote_average, poster_path } = item;
          return (
            <MovieCard
              id={id}
              title={title}
              rate={vote_average}
              poster={poster_path}
              source="rented"
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
