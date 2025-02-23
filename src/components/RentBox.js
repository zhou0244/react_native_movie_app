import { Pressable, Text, View } from "react-native";
import { styles } from "../theme/style";
import Button from "./Button";

export default function RentBox({
  movieSelected,
  toggleDialog,
  saveRentedMovies,
}) {
  return (
    <View>
      <Text>Do you want to rent {movieSelected.name} for $4.99?</Text>

      <Button
        text="Confirm"
        accessibilityLabel="Press to confirm"
        onPress={() => {
          saveRentedMovies(movieSelected.id);
          toggleDialog();
        }}
      />

      <Button
        type="cancel"
        text="Cancel"
        accessibilityLabel="Press to cancel"
        onPress={toggleDialog}
      />
    </View>
  );
}
