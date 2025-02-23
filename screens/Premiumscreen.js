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
import { cloneElement } from "react";

const { width, height } = Dimensions.get("window");

export default function Premium() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topimagecontainer}>
        <ImageBackground
          source={spotifypremiumimage}
          style={styles.topimagestyle}
        >
          <LinearGradient
            colors={[
              "transparent",
              "rgba(0, 0, 0, 0)",
              // "rgba(0, 0, 0, 0.4)",
              "rgba(0, 0, 0, 0.9)",
            ]}
            style={styles.background}
          ></LinearGradient>
        </ImageBackground>

        <View style={styles.bgimagecontentcontainer}>
          <View style={styles.bgimagecontent}>
            <Entypo name="spotify" size={24} color="white" />
            <Text style={{ color: "white" }}>Premium</Text>
          </View>
        </View>
      </View>
      <View style={styles.Scrollviewitems}>
        <Text style={{ color: "#ffffff", fontSize: 27, fontWeight: "bold" }}>
          Listen without limmits on your phone . Try 2 months of Premium
          individual for free.
        </Text>
        <Text style={{ color: "#b3b3b3", fontSize: 11, fontWeight: "600" }}>
          You can't upgrade to Premium in the app . We know it's not ideal.
        </Text>
        <View style={styles.cardcontainer}>
          <View style={styles.card}>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "bold",
                marginVertical: 10,
                marginHorizontal: 10,
                paddingVertical: 5,
                paddingHorizontal: 5,
              }}
            >
              Why join Premium ?
            </Text>
            <View
              style={{ backgroundColor: "#b3b3b3", height: 1, width: "100%" }}
            ></View>
          </View>

          <Text>Available plans</Text>
          <View style={styles.card}>
            <Text>Mini</Text>
          </View>

          <View style={styles.card}>
            <Text>Individual</Text>
          </View>

          <View style={styles.card}>
            <Text>Student</Text>
          </View>

          <View style={styles.card}>
            <Text>Duo</Text>
          </View>

          <View style={styles.card}>
            <Text>Family</Text>
          </View>
        </View>
      </View>
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
    marginTop: -50,
    marginHorizontal: -24,
    height: "auto",
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
    paddingVertical: 10,
    paddingLeft: 10,
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
    height: 200,
  },
  cardcontainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  card: {
    borderRadius: 15,
    width: "100%",
    height: "270",
    backgroundColor: "#242424",
    marginVertical: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // paddingVertical: 15,
    // paddingHorizontal: 15,
  },
});
