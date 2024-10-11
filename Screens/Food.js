import { StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { MEALS } from "../Data/data";
import Meal from "../Components/Meal";
export default function Food({ route, navigation }) {
  const [value, setValue] = useState(route.params.category);
  const meals = MEALS.filter((meal) =>
    meal.categoryIds.some((id) => id === route.params.id)
  );
  useEffect(() => {
    navigation.setOptions({
      title: value.toUpperCase(),
    });
  }, [navigation, value]);
  function goTo(id) {
    navigation.push("Receipe", { id: id });
  }
  return (
    <ScrollView style={styles.container}>
      {meals.map((meal) => {
        return (
          <Meal
            key={meal.id}
            id={meal.id}
            src={meal.imageUrl}
            title={meal.title}
            tags={[meal.duration, meal.complexity, meal.affordability]}
            onPress={goTo}
          />
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
