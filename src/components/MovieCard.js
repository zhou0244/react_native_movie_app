import { Image, Text, View } from "react-native";
import { styles } from "../theme/style";
import { useRouter } from "expo-router";
import Button from "./Button";
import MovieInfo from "./MovieInfo";
import { Card, Icon } from "@rneui/base";

export default function MovieCard({
  id,
  title,
  language,
  year,
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
    <Card containerStyle={styles.card}>
      <MovieInfo title={title} language={language} year={year} rate={rate} />

      <View style={styles.poster}>
        {poster ? (
          <Image
            source={{ uri: IMAGE_BASE_URL + poster }}
            style={{ height: "100%" }}
          />
        ) : (
          <View
            style={{
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Image
              source={require("../../assets/undraw_taken_mshk.png")}
              style={{ height: 200, width: "100%" }}
              resizeMode="contain"
            />
            <Text style={{ color: "red", textAlign: "center" }}>
              No poster found...
            </Text>
          </View>
        )}
      </View>

      <View style={{ padding: 16 }}>
        {source === "rented" ? (
          <Button
            text="Watch Movie"
            accessibilityLabel="Press to watch this movie"
            iconName="eye"
            onPress={() => {
              goToMovie(id, title);
            }}
          />
        ) : (
          <Button
            text="Rent Movie"
            accessibilityLabel="Press to rent this movie"
            iconName="shopping-cart"
            onPress={() => {
              toggleDialog();
              setMovieSelected({ id: id, name: title });
            }}
          />
        )}
      </View>
    </Card>
  );
}
