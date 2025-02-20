import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../theme/theme";
import { useState } from "react";
import { useData } from "../context/SearchContext";

export default function SearchBox() {
  const [text, onChangeText] = useState("");
  const { searchKeyword, setSearchKeyword } = useData();
  const [hasKeyword, setHasKeyword] = useState(true);

  const getKeyword = () => {
    if (text == "") {
      setHasKeyword(false);

      setTimeout(() => {
        setHasKeyword(true);
      }, 3000);

      return;
    }
    setSearchKeyword(text);
  };

  return (
    <View style={styles.home}>
      <Text style={styles.subTitle}>Search your favorite movies</Text>

      <View>
        <TextInput
          style={styles.search}
          keyboardType="default"
          placeholder="find a movie you like"
          onChangeText={onChangeText}
          value={text}
        />
        {hasKeyword ? null : <Text>Try type something</Text>}
      </View>

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
