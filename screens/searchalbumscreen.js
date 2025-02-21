import { Text, View, StyleSheet } from "react-native";

export default function Searchalbumscreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pagetxt}>Search album screen</Text>
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
