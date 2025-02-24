import { Text, View, StyleSheet } from "react-native";

export default function Settingsandprivacy() {
  return (
    <View style={styles.pagecontainer}>
      <Text style={{ color: "white" }}>settings and privacy page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pagecontainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#121212",
  },
});
