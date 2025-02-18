import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../theme/theme";

export default function SearchBox() {
  return (
    <View style={styles.home}>
      <Text style={styles.title}>Search your favorite movies</Text>

      <TextInput style={styles.search} placeholder="find a movie you like" />

      <View style={{ marginTop: 20 }}>
        <Pressable
          style={styles.buttonBase}
          accessibilityLabel="Press to search movies"
        >
          <Text style={{ color: "white" }}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
}
