import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Colors from "../assets/Colors/Colors";

export default function Meal({ src, title, tags, onPress, id }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? [styles.pressed] : "")}
        onPress={() => onPress(id)}
      >
        <View style={styles.imgContainer}>
          <Image source={{ uri: src }} style={styles.img} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.header]}>{title}</Text>
          <View style={styles.tagsContainer}>
            {tags.map((tag) => (
              <Text style={styles.tag} key={tag}>
                {tag}
              </Text>
            ))}
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    overflow: "hidden",
  },
  imgContainer: {
    flex: 1,
    width: "100%",
    height: 300,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  pressed: {
    opacity: 0.5,
  },
  infoContainer: {
    flex: 1,
    paddingTop: 5,
    alignItems: "center",
    backgroundColor: Colors.primary500,
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
    color: Colors.secondary900,
  },
  tag: {
    fontFamily: "Inter-regular",
    fontSize: 13,
    color: "#757575",
  },
});
