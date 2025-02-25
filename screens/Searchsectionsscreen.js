import { Text, View, StyleSheet } from "react-native";

export default function Searchsectionsscreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pagetxt}>
        Screen for the different sections in the search screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#121212",
  },
  pagetxt: {
    color: "white",
  },
});
