import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import Colors from "./assets/Colors/Colors";
import Food from "./Screens/Food";
import Receipe from "./Screens/Receipe";
import { Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [loaded, error] = useFonts({
    "Inter-regular": require("./assets/Fonts/Inter_18pt-Regular.ttf"),
    "Inter-light": require("./assets/Fonts/Inter_18pt-Thin.ttf"),
    "Inter-bold": require("./assets/Fonts/Inter_18pt-Bold.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" />
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
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Food" component={Food} />
          <Stack.Screen name="Receipe" component={Receipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
