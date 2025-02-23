import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";
import spotifypremiumimage from "../assets/Spotify-Premium-upgrade-3.jpg";

const { width, height } = Dimensions.get("window");

export default function Premium() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topimagecontainer}>
        <LinearGradient
          colors={["rgba(255, 255, 255, 0.8)", "transparent"]}
          style={styles.background}
        >
          <ImageBackground
            source={spotifypremiumimage}
            style={styles.topimagestyle}
          >
            <View style={styles.bgimagecontentcontainer}>
              <View style={styles.bgimagecontent}>
                <Entypo name="spotify" size={24} color="black" />
                <Text>Premium</Text>
              </View>
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>

      <View style={styles.Scrollviewitems}></View>
    </ScrollView>
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
  topimagecontainer: {
    width: width + 40,
    marginTop: -47,
    marginHorizontal: -24,
  },
  topimagestyle: {
    height: 200,
    width: width + 40,
    resizeMode: "cover",
  },
  Scrollviewitems: {},
  bgimagecontent: {
    flexDirection: "row",
    // paddingVertical: 5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bgimagecontentcontainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
