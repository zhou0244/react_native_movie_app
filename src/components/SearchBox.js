import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../theme/theme";
import { useState } from "react";
import { useData } from "../context/SearchContext";

export default function SearchBox() {
  const [text, onChangeText] = useState("");
  const { searchKeyword, setSearchKeyword } = useData();
  const { hasKeyword, setHasKeyword } = useData();

  const getKeyword = () => {
    setSearchKeyword(text);
  };

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
      {hasKeyword ? <Text>1</Text> : <Text>Try type something</Text>}

      <View style={{ marginTop: 20 }}>
        <Pressable
          style={styles.buttonBase}
          accessibilityLabel="Press to search movies"
          onPress={() => {
            getKeyword();
            console.log(text);
          }}
        >
          <Text style={{ color: "white" }}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
}
