import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../theme/theme";
import { useState } from "react";

export default function SearchBox() {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.home}>
      <Text style={styles.subTitle}>Search your favorite movies</Text>

      <TextInput
        style={styles.search}
        keyboardType="default"
        placeholder="find a movie you like"
        onChangeText={onChangeText}
        value={text}
      />

      <View style={{ marginTop: 20 }}>
        <Pressable
          style={styles.buttonBase}
          accessibilityLabel="Press to search movies"
          onPress={() => console.log(text)}
        >
          <Text style={{ color: "white" }}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
}
