import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Screens/HomeScreen";
import Colors from "./assets/Colors/Colors";
import Food from "./Screens/Food";
import Receipe from "./Screens/Receipe";
import Favourite from "./Screens/Favourite";
// import FavouritesContext from "./Store/Context/FavouritesContext";
import { Provider } from "react-redux";
import Store from "./Store/Redux/Store";
function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.secondary900,
        },
        headerTintColor: Colors.primary500,
        sceneContainerStyle: {
          backgroundColor: Colors.secondary900,
        },
        drawerActiveBackgroundColor: Colors.primary500,
        drawerActiveTintColor: Colors.secondary700,
        drawerInactiveTintColor: Colors.primary700,
        drawerStyle: {
          backgroundColor: Colors.secondary900,
          width: 230,
          paddingVertical: 30,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Favourite" component={Favourite} />
    </Drawer.Navigator>
  );
}
export default function App() {
  const [loaded, error] = useFonts({
    "Inter-regular": require("./assets/Fonts/Inter_18pt-Regular.ttf"),
    "Inter-light": require("./assets/Fonts/Inter_18pt-Thin.ttf"),
    "Inter-bold": require("./assets/Fonts/Inter_18pt-Bold.ttf"),
  });
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" />
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.secondary900,
              },
              headerTintColor: Colors.primary500,
              contentStyle: {
                backgroundColor: Colors.secondary900,
              },
            }}
          >
            <Stack.Screen
              name="Start"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Food" component={Food} />
            <Stack.Screen name="Receipe" component={Receipe} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
