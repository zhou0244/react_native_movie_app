import { Link } from "expo-router";
import { View, Image, Text } from "react-native";
import { styles } from "../theme/style";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>CinemaDirect</Text>
      <Link href="/">My Movies</Link>
    </View>
  );
}
