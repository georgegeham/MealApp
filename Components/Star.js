import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Star({ toggle, color }) {
  return (
    <Pressable onPress={toggle}>
      <Ionicons name="star" size="24" color={color} />
    </Pressable>
  );
}
