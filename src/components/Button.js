import { Pressable, Text } from "react-native";
import { styles } from "../theme/style";
import { View } from "react-native";
import { Icon } from "@rneui/base";

export default function Button({
  type = "",
  text = "Button",
  onPress,
  accessibilityLabel = "",
  iconName = "",
}) {
  if (type == "cancel") {
    return (
      <View style={styles.buttonOutline}>
        <Pressable
          accessibilityLabel={accessibilityLabel}
          onPress={onPress}
          style={{ flexDirection: "row", justifyContent: "center", gap: 16 }}
        >
          {iconName ? (
            <Icon name={iconName} type="feather" color="royalblue" />
          ) : null}
          <Text style={[styles.textOnWhite, styles.buttonText]}>{text}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.button}>
      <Pressable
        accessibilityLabel={accessibilityLabel}
        onPress={onPress}
        style={{ flexDirection: "row", justifyContent: "center", gap: 16 }}
      >
        {iconName ? (
          <Icon name={iconName} type="feather" color="white" />
        ) : null}
        <Text style={[styles.textOnDark, styles.buttonText]}>{text}</Text>
      </Pressable>
    </View>
  );
}
