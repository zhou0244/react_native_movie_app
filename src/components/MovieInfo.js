import { Text, View } from "react-native";
import { styles } from "../theme/style";

export default function MovieInfo({ title, language, year, rate }) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Text style={[styles.subTitle, { textAlign: "left", flex: 1 }]}>
          {title}
        </Text>
        <Text style={[styles.text, { textAlign: "right" }]}>
          {rate.toFixed(1)}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Text>{year}</Text>
        <Text>{language}</Text>
      </View>
    </View>
  );
}
