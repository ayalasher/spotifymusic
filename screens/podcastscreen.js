import { Text, View, StyleSheet } from "react-native";

export default function Poadcastscreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Podcast screen</Text>
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
