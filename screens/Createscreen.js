import { Text, View, StyleSheet, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Createscreen({ navigation }) {
  function alerttestingtopersonal() {
    navigation.navigate("Personal playlist");
  }

  function alerttestingtocombine() {
    navigation.navigate("Blend playlist");
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Get creative {"  "}
        <MaterialIcons name="create" size={24} color="white" />
        {"  "}
      </Text>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          margin: 20,
          width: "100%",
        }}
      >
        <Pressable
          onPress={alerttestingtopersonal}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#2a2a2a",
            padding: 20,
          }}
        >
          <View style={{ padding: 5, margin: 5, height: "100%" }}>
            <FontAwesome name="music" size={34} color="white" />
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>
              Playlist
            </Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              Build a song with songs or episodes
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={alerttestingtocombine}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
            width: "100%",
            borderRadius: 10,
            backgroundColor: "#2a2a2a",
            padding: 20,
          }}
        >
          <View style={{ padding: 5, margin: 5, height: "100%" }}>
            <MaterialCommunityIcons
              name="vector-combine"
              size={34}
              color="white"
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "800" }}>
              Blend
            </Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              Combine tastes in a shared {"   "} playlist with friends
            </Text>
          </View>
        </Pressable>
      </View>
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
