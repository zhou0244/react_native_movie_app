import { Pressable, Text } from "react-native";
import { styles } from "../theme/theme";
import { View } from "react-native";

export default function Button({
  type,
  text = "Button",
  onPress,
  accessibilityLabel,
}) {
  if (type == "cancel") {
    return (
      <View style={styles.buttonOutline}>
        <Pressable accessibilityLabel={accessibilityLabel} onPress={onPress}>
          <Text style={styles.textOnWhite}>{text}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonBase}>
      <Pressable accessibilityLabel={accessibilityLabel} onPress={onPress}>
        <Text style={styles.textOnDark}>{text}</Text>
      </Pressable>
    </View>
  );
}
