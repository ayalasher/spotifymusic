import { Text, View, StyleSheet } from "react-native";

export default function Createscreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.pagetxt}>
        Get creative with your personal playlist combine tastes in a shared
        playlist with friends{" "}
      </Text>
      <View
        style={{
          flexDirection: "column",
        }}
      ></View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 35,
    backgroundColor: "#121212",
  },
  pagetxt: {
    color: "white",
  },
});
