import { Image, Pressable, View } from "react-native";
import { Text } from "react-native";
import { styles } from "../theme/theme";
import { Stack, useRouter } from "expo-router";
import Button from "./Button";

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
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      }}
    >
      <View
        style={{
          borderRadius: 16,
          borderWidth: 0,
          marginVertical: 16,
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        {poster ? (
          <Image
            source={{ uri: IMAGE_BASE_URL + poster }}
            style={{ height: 320 }}
          />
        ) : (
          <Text style={{ color: "red", paddingBlock: 40 }}>
            No poster found...
          </Text>
        )}

        <View style={{ padding: 20 }}>
          <Text>{title}</Text>
          <Text>{rate}</Text>

          {source === "rented" ? (
            <Button
              text="Watch Movie"
              accessibilityLabel="Press to watch this movie"
              onPress={() => {
                goToMovie(id, title);
              }}
            />
          ) : (
            <Button
              text="Rent Movie"
              accessibilityLabel="Press to rent this movie"
              onPress={() => {
                toggleDialog();
                setMovieSelected({ id: id, name: title });
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}
