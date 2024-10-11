import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../Data/data";
import Ingredient from "../Components/Ingredient";
import { useEffect, useState } from "react";
import Star from "../Components/Star";
export default function Receipe({ route, navigation }) {
  const [meal] = MEALS.filter((meal) => meal.id === route.params.id);
  const tags = [meal.duration, meal.complexity, meal.affordability];
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Star />;
      },
    });
  }, [navigation]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: meal.imageUrl }} style={styles.img} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.header]}>{meal.title}</Text>
          <View style={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <Text style={styles.tag} key={index}>
                {tag}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.ingredientContainer}>
          <View style={styles.border}>
            <Text style={styles.ingredient}>Ingredient</Text>
          </View>
          {meal.ingredients.map((ingredient) => (
            <Ingredient text={ingredient} key={ingredient} />
          ))}
        </View>
        <View style={styles.ingredientContainer}>
          <View style={styles.border}>
            <Text style={styles.ingredient}>Steps</Text>
          </View>
          {meal.steps.map((step) => (
            <Ingredient text={step} key={step} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  imgContainer: {
    flex: 1,
    width: "100%",
    height: 300,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
  },
  tagsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignSelf: "stretch",
    marginVertical: 9,
    marginHorizontal: 13,
  },
  header: {
    fontFamily: "Inter-regular",
    fontSize: 18,
    color: Colors.primary500,
  },
  tag: {
    fontFamily: "Inter-regular",
    fontSize: 13,
    color: Colors.primary700,
  },
  ingredientContainer: {
    alignItems: "center",
  },
  ingredient: {
    marginVertical: 5,
    fontFamily: "Inter-bold",
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  border: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    marginBottom: 8,
  },
});
