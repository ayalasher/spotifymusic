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
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 10,
                marginHorizontal: 15,
                marginVertical: 7,
              }}
            >
              <Entypo
                name="sound-mute"
                size={24}
                color="white"
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ color: "#fafafa" }}>ad-free music listening</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 10,
                marginHorizontal: 15,
                marginVertical: 7,
              }}
            >
              <AntDesign
                name="download"
                size={24}
                color="white"
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ color: "#fafafa" }}>
                Download tolisten offline
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 10,
                marginHorizontal: 15,
                marginVertical: 7,
              }}
            >
              <Entypo
                name="shuffle"
                size={24}
                color="white"
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ color: "#fafafa" }}>Play songs in any order</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 10,
                marginHorizontal: 15,
                marginVertical: 7,
              }}
            >
              <Feather
                name="headphones"
                size={24}
                color="white"
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ color: "#fafafa" }}>High quality audio</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 10,
                marginHorizontal: 15,
                marginVertical: 7,
              }}
            >
              <FontAwesome5
                name="users"
                size={24}
                color="white"
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ color: "#fafafa" }}>
                Listen with friends in real time
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 10,
                marginHorizontal: 15,
                marginVertical: 7,
              }}
            >
              <Entypo
                name="list"
                size={24}
                color="white"
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ color: "#fafafa" }}>Organise listening queue</Text>
            </View>
          </View>

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
            Available plans
          </Text>
          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 10,
                marginHorizontal: 15,
                marginVertical: 7,
              }}
            >
              <Entypo
                name="spotify"
                size={24}
                color="white"
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ color: "white" }}>Premium</Text>
            </View>
            <Text
              style={{
                color: "#cff56a",
                marginHorizontal: 20,
                marginVertical: 7,
                fontSize: 25,
                fontWeight: "800",
              }}
            >
              Mini
            </Text>
            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
              }}
            >
              1 mobile only premium account{" "}
            </Text>
            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
              }}
            >
              Offline listening upto 30 devices on one phone
            </Text>
            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
              }}
            >
              One time payment
            </Text>
            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                paddingBottom: 25,
              }}
            >
              Basic audio quality
            </Text>

            <Text
              style={{
                marginHorizontal: 20,
                color: "#b3b3b3",
                fontSize: 11,
                fontWeight: "600",
                paddingBottom: 25,
              }}
            >
              You can't upgrade to Premium in the app . We know it's not ideal.
            </Text>
          </View>

          <View style={styles.card}>
            <View
              style={{
                backgroundColor: "#ffd2d7",
                padding: 7,
                position: "absolute",
                top: 0,
                left: 0,
                borderTopLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
            >
              <Text style={{ color: "black" }}>Free for 2 months</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 10,
                marginHorizontal: 15,
                marginTop: 40,
              }}
            >
              <Entypo
                name="spotify"
                size={24}
                color="white"
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ color: "white" }}>Premium</Text>
            </View>

            <Text
              style={{
                color: "#ffd2d7",
                marginHorizontal: 20,
                marginVertical: 7,
                fontSize: 25,
                fontWeight: "800",
              }}
            >
              Individual
            </Text>
            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                // paddingBottom: 25,
              }}
            >
              1 premium account
            </Text>
            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                // paddingBottom: 25,
              }}
            >
              cancel anytime
            </Text>
            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                paddingBottom: 25,
              }}
            >
              Subscribe or one-time pay
            </Text>

            <Text
              style={{
                marginHorizontal: 20,
                color: "#b3b3b3",
                fontSize: 11,
                fontWeight: "600",
                paddingBottom: 25,
              }}
            >
              You can't upgrade to Premium in the app . We know it's not ideal.
            </Text>
          </View>

          <View style={styles.card}>
            <View
              style={{
                backgroundColor: "#c4b1d4",
                padding: 7,
                position: "absolute",
                top: 0,
                left: 0,
                borderTopLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
            >
              <Text style={{ color: "black" }}>Free for 1 month</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 10,
                marginHorizontal: 15,
                marginTop: 40,
              }}
            >
              <Entypo
                name="spotify"
                size={24}
                color="white"
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ color: "white" }}>Premium</Text>
            </View>

            <Text
              style={{
                color: "#c4b1d4",
                marginHorizontal: 20,
                marginVertical: 7,
                fontSize: 25,
                fontWeight: "800",
              }}
            >
              Student
            </Text>
            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                // paddingBottom: 25,
              }}
            >
              1 verified Premium account
            </Text>

            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                // paddingBottom: 25,
              }}
            >
              Discount for elligible students
            </Text>

            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                // paddingBottom: 25,
              }}
            >
              cancel anytime
            </Text>

            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                paddingBottom: 25,
              }}
            >
              Subscribe or one-time pay
            </Text>

            <Text
              style={{
                marginHorizontal: 20,
                color: "#b3b3b3",
                fontSize: 11,
                fontWeight: "600",
                paddingBottom: 25,
              }}
            >
              You can't upgrade to Premium in the app . We know it's not ideal.
            </Text>
          </View>

          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 10,
                marginHorizontal: 15,
                marginTop: 40,
              }}
            >
              <Entypo
                name="spotify"
                size={24}
                color="white"
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ color: "white" }}>Premium</Text>
            </View>

            <Text
              style={{
                color: "#ffc862",
                marginHorizontal: 20,
                marginVertical: 7,
                fontSize: 25,
                fontWeight: "800",
              }}
            >
              Duo
            </Text>

            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                // paddingBottom: 25,
              }}
            >
              2 Premium accounts
            </Text>

            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                // paddingBottom: 25,
              }}
            >
              cancel anytime
            </Text>

            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                paddingBottom: 25,
              }}
            >
              Subscribe or one-time pay
            </Text>

            <Text
              style={{
                marginHorizontal: 20,
                color: "#b3b3b3",
                fontSize: 11,
                fontWeight: "600",
                paddingBottom: 25,
              }}
            >
              You can't upgrade to Premium in the app . We know it's not ideal.
            </Text>
          </View>

          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // marginLeft: 10,
                marginHorizontal: 15,
                marginTop: 40,
              }}
            >
              <Entypo
                name="spotify"
                size={24}
                color="white"
                style={{ paddingHorizontal: 5 }}
              />
              <Text style={{ color: "white" }}>Premium</Text>
            </View>

            <Text
              style={{
                color: "#a5bbd1",
                marginHorizontal: 20,
                marginVertical: 7,
                fontSize: 25,
                fontWeight: "800",
              }}
            >
              Family
            </Text>

            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                // paddingBottom: 25,
              }}
            >
              Upto 6 Premium accounts
            </Text>

            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                // paddingBottom: 25,
              }}
            >
              Control contentmarked as explicit
            </Text>

            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                // paddingBottom: 25,
              }}
            >
              cancel anytime
            </Text>

            <Text
              style={{
                color: "#fafafa",
                marginHorizontal: 20,
                marginVertical: 5,
                paddingBottom: 25,
              }}
            >
              Subscribe or one-time pay
            </Text>

            <Text
              style={{
                marginHorizontal: 20,
                color: "#b3b3b3",
                fontSize: 11,
                fontWeight: "600",
                paddingBottom: 25,
              }}
            >
              You can't upgrade to Premium in the app . We know it's not ideal.
            </Text>
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
    height: "auto",
    backgroundColor: "#242424",
    marginVertical: 15,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // paddingVertical: 15,
    // paddingHorizontal: 15,
  },
});
