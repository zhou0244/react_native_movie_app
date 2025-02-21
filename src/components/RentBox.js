import { Pressable, Text, View } from "react-native";
import { styles } from "../theme/theme";

export default function RentBox({ movieName, toggleDialog }) {
  return (
    <View>
      <Text>Do you want to rent {movieName} for $4.99?</Text>
      <Pressable style={styles.buttonBase}>
        <Text style={{ color: "white" }}>Rent</Text>
      </Pressable>
      <Pressable style={styles.buttonBase} onPress={toggleDialog}>
        <Text style={{ color: "white" }}>Cancel</Text>
      </Pressable>
    </View>
  );
}
