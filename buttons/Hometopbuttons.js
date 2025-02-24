// Button for navigating to the profile page from the home page.....
import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import {}  from ''

export default function Hometopbuttonns({ children, accesstokenresults }) {
  //   function Navigatetouserpage() {
  const navigation = useNavigation();
  //     navigation.navigate("User");
  //     // navigationtouserpage();
  //   }

  const [accesstokendata, setaccesstokendata] = useState(null);

  // setaccesstokendata(accesstokenresults)

  return (
    <Pressable
      onPress={() => navigation.navigate("User")}
      android_ripple={{ color: "white" }}
      style={({ pressed }) => [
        pressed ? styles.btncontainer && styles.opacity : styles.btncontainer,
      ]}
    >
      <Text style={styles.btntxt}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btncontainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    color: "black",
    backgroundColor: "#19e68c",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "auto",
    paddingHorizontal: "auto",
  },
  btntxt: {
    fontWeight: "800",
    fontSize: 20,
  },
  opacity: {
    height: 40,
    width: 40,
    borderRadius: 20,
    color: "black",
    backgroundColor: "#2b8a2b",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "auto",
    paddingHorizontal: "auto",
    opacity: 0.5,
  },
});
