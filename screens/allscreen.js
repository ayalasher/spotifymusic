import { Text, View, StyleSheet } from "react-native";

export default function Allscreen() {
  return (
    <View style={styles.container}>
      <Text>All screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});
