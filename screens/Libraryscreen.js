import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import Hometopbuttonns from "../buttons/Hometopbuttons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

export default function Library() {
  return (
    <View style={styles.container}>
      <View style={styles.topsectioncontainer}>
        <View style={styles.profileandsearch}>
          <View style={styles.btncontainer}>
            <Hometopbuttonns indrawer={false}>P</Hometopbuttonns>
          </View>
          <Text style={styles.topsectiontxt}>Your Library</Text>
        </View>

        <View style={styles.cameraiconcontainer}>
          <Pressable style={styles.iconcontainers}>
            <AntDesign name="search1" size={24} color="white" />
          </Pressable>
          <Pressable style={styles.iconcontainers}>
            <AntDesign name="plus" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
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
  iconcontainers: {
    paddingHorizontal: 10,
  },
});
