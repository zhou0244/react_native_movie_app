import { Image, View } from "react-native";
import { Text } from "react-native";
import { styles } from "../theme/theme";

export default function MovieCard({ id, title, rate, poster }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

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
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{rate}</Text>
    </View>
  );
}
