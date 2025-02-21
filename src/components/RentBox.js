import { Pressable, Text, View } from "react-native";
import { styles } from "../theme/theme";

export default function RentBox({
  movieSelected,
  toggleDialog,
  saveRentedMovies,
}) {
  return (
    <View>
      <Text>Do you want to rent {movieSelected.name} for $4.99?</Text>
      <Pressable
        style={styles.buttonBase}
        onPress={() => {
          saveRentedMovies(movieSelected.id);
          toggleDialog();
        }}
      >
        <Text style={{ color: "white" }}>Confirm</Text>
      </Pressable>
      <Pressable style={styles.buttonBase} onPress={toggleDialog}>
        <Text style={{ color: "white" }}>Cancel</Text>
      </Pressable>
    </View>
  );
}
