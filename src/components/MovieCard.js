import { Image, Pressable, View } from "react-native";
import { Text } from "react-native";
import { styles } from "../theme/theme";
import { Stack, useRouter } from "expo-router";

export default function MovieCard({
  id,
  title,
  rate,
  poster,
  toggleDialog,
  setMovieSelected,
  source,
}) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const router = useRouter();

  const goToMovie = (id, title) => {
    router.push({
      pathname: `/[id]`,
      params: { id, title },
    });
    console.log(`You're on ${title} page`);
  };

  return (
    <View style={{ borderWidth: 1, marginBottom: 20 }}>
      {poster ? (
        <Image
          source={{ uri: IMAGE_BASE_URL + poster }}
          style={{ height: 300 }}
        />
      ) : (
        <Text style={{ color: "red", paddingBlock: 40 }}>
          No poster found...
        </Text>
      )}

      <View style={{ padding: 20 }}>
        <Text>{id}</Text>
        <Text>{title}</Text>
        <Text>{rate}</Text>

        {source === "rented" ? (
          <Pressable
            style={styles.buttonBase}
            accessibilityLabel="Press to watch this movie"
            onPress={() => {
              goToMovie(id, title);
            }}
          >
            <Text style={{ color: "white" }}>Watch Movies</Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.buttonBase}
            accessibilityLabel="Press to rent this movie"
            onPress={() => {
              toggleDialog();
              setMovieSelected({ id: id, name: title });
            }}
          >
            <Text style={{ color: "white" }}>Rent Movie</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
