import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "../theme/style";
import { useState } from "react";
import { useData } from "../context/SearchContext";
import Button from "./Button";

export default function SearchBox({ toggleDialog }) {
  const [text, onChangeText] = useState("");
  const { setSearchKeyword } = useData();
  const [hasKeyword, setHasKeyword] = useState(true);

  const getKeyword = () => {
    if (text.trim().length === 0) {
      setHasKeyword(false);
      onChangeText("");

      setTimeout(() => {
        setHasKeyword(true);
      }, 3000);

      return;
    }
    setSearchKeyword(text);
    console.log(text);
    toggleDialog();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.home}>
          <Text style={styles.subTitle}>Search your favorite movies</Text>

          <View
            style={{
              height: 60,
              width: "100%",
            }}
          >
            <TextInput
              style={styles.search}
              placeholder="find a movie you like"
              onChangeText={onChangeText}
              value={text}
              autoCapitalize="none"
              autoFocus={true}
              clearButtonMode="always"
              returnKeyType="search"
              onSubmitEditing={getKeyword}
            />
            {hasKeyword ? null : (
              <Text style={styles.warning}>Try type something</Text>
            )}
          </View>

          <Button
            text="Search"
            accessibilityLabel="Press to search movies"
            onPress={getKeyword}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
