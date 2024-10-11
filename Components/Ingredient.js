import { View, Text, StyleSheet } from "react-native";
import Colors from "../assets/Colors/Colors";
export default function Ingredient({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 10,
    alignItems: "center",
    margin: 5,
    backgroundColor: Colors.primary500,
    borderRadius: 10,
  },
  text: {
    color: Colors.secondary700,
    textAlign: "center",
  },
});
