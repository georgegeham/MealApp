import { useContext } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Meal from "../Components/Meal";
import { FavouriteCtx } from "../Store/Context/FavouritesContext";
import { MEALS } from "../Data/data";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToFavourite,
  removeFromFavourite,
} from "../Store/Redux/FavouriteSlice";
export default function Favourite({ navigation }) {
  // const favourite = useContext(FavouriteCtx).ids;
  const favourite = useSelector((state) => state.favouriteMeals.ids);
  const meals = MEALS.filter((meal) => favourite.includes(meal.id));
  function goTo(id) {
    navigation.push("Receipe", { id: id });
  }
  if (favourite.length === 0) {
    return (
      <View style={styles.textContaienr}>
        <Text style={styles.text}>There is no Favourite Meals</Text>
      </View>
    );
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
  textContaienr: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontFamily: "inter-bold",
    fontSize: 20,
  },
});
