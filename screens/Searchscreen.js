import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import Hometopbuttonns from "../buttons/Hometopbuttons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
// import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";

export default function Search() {
  const [searhQuery, setsearchQuery] = useState("");

  function captureSearchquerytext(Text) {
    setsearchQuery(Text);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topsectioncontainer}>
        <View style={styles.profileandsearch}>
          <View style={styles.btncontainer}>
            <Hometopbuttonns>P</Hometopbuttonns>
          </View>
          <Text style={styles.topsectiontxt}>Search</Text>
        </View>

        <View style={styles.cameraiconcontainer}>
          <Pressable>
            <AntDesign name="camerao" size={27} color="white" />
          </Pressable>
        </View>
      </View>

      <View style={styles.searchbarcontainer}>
        <AntDesign
          style={styles.searchicon}
          name="search1"
          size={24}
          color="black"
        />
        <TextInput
          onChangeText={captureSearchquerytext}
          placeholderTextColor={"rgb(31,31,31)"}
          placeholder="What do you want to listen to right now testing"
        />
      </View>

      <View style={styles.secondsection}>
        <Text style={styles.pickedforyoutxt}>Picked for you</Text>
      </View>

      <View style={styles.topalbumcard}>
        <Text>Album card testing</Text>
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
  topsectioncontainer: {
    //    backgroundColor:"red",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileandsearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },

  cameraiconcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  topsectiontxt: {
    paddingHorizontal: 10,
    fontSize: 25,
    fontWeight: "900",
    color: "white",
  },
  profilebutton: {},
  btncontainer: {},
  searchbarcontainer: {
    backgroundColor: "white",
    flexDirection: "row",
    // alignContent:"center",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderRadius: 7,
    marginTop: 15,
  },
  searchicon: {
    fontWeight: "700",
    paddingLeft: 10,
  },
  secondsection: {
    flexDirection: "column",
    padding: 15,
  },
  pickedforyoutxt: {
    color: "white",
    fontWeight: "700",
    fontSize: 17,
    paddingVertical: 10,
  },
  topalbumcard: {
    width: "100%",
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "yellow",
    height: "100%",
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
});
