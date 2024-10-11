import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../Data/data";
import FoodCategory from "../Components/FoodCategory";
export default function HomeScreen({ navigation }) {
  function goTo(title, id) {
    return navigation.push("Food", { category: title, id: id });
  }
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(item) => (
        <FoodCategory
          title={item.item.title}
          onPress={goTo}
          id={item.item.id}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
});
