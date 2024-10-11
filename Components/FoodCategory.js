import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../assets/Colors/Colors";
import shadow from "./Styles/Shadow";
export default function FoodCategory({ title, onPress, id }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.press, styles.pressed] : styles.press
        }
        onPress={() => onPress(title, id)}
      >
        <View style={shadow}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: Colors.primary500,
    width: 100,
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
  },
  press: {
    flex: 1,
    justifyContent: "center",
    // padding: 7,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: Colors.primary700,
  },
  text: {
    fontFamily: "Inter-regular",
    color: Colors.secondary700,
    textTransform: "uppercase",
    fontSize: 16,
    letterSpacing: 3,
  },
});
