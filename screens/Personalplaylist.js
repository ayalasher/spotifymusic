import { Text, View, StyleSheet } from "react-native";

export default function Personalplaylist() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Personal playlist</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#121212",
  },
});
