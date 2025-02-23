import { Text, View } from "react-native";
import { styles } from "../theme/style";
import { Icon } from "@rneui/base";

export default function MovieInfo({ title, language, year, rate }) {
  return (
    <View>
      <View style={styles.movieInfo}>
        <Text style={[styles.title, { textAlign: "left", flex: 1 }]}>
          {title}
        </Text>

        <Text style={[styles.rate, { textAlign: "right" }]}>
          {rate.toFixed(1)}
        </Text>
      </View>

      <View style={styles.movieInfo}>
        <Text style={{ color: "#6d6d6d" }}>{year}</Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Icon name="globe" type="feather" color="royalblue" size={16} />
          <Text style={{ color: "#6d6d6d" }}>{language.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
}
