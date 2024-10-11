import { Pressable } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Star() {
  const [color, setColor] = useState("white");
  function changeColor() {
    setColor((prev) => (prev === "white" ? "#DCC328" : "white"));
  }
  return (
    <Pressable onPress={changeColor}>
      <Ionicons name="star" size="24" color={color} />
    </Pressable>
  );
}
