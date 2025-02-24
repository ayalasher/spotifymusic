import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import Hometopbuttonns from "../buttons/Hometopbuttons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateuserdata } from "../redux/store";
import axios from "axios";
// import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";

const sectionsdata = [
  {
    id: "1",
    title: "Albums",
    colorcode: "#dc148c",
  },
  {
    id: "2",
    title: "Artists",
    colorcode: "#006450",
  },
  {
    id: "3",
    title: "Audiobooks",
    colorcode: "#8400e7",
  },
  {
    id: "4",
    title: "categories",
    colorcode: "#1e3264",
  },
  {
    id: "5",
    title: "Chapters",
    colorcode: "#608108",
  },
  {
    id: "6",
    title: "Episodes",
    colorcode: "#8c1932",
  },
  {
    id: "7",
    title: "Episodes",
    colorcode: "#8c1932",
  },
  {
    id: "8",
    title: "Genres",
    colorcode: "#477d95",
  },
  {
    id: "9",
    title: "Markets",
    colorcode: "#e1118c",
  },
  {
    id: "10",
    title: "Player",
    colorcode: "#0d73ec",
  },
  {
    id: "11",
    title: "Playlists",
    colorcode: "#477d95",
  },
  {
    id: "12",
    title: "Shows",
    colorcode: "#dc148c",
  },
  {
    id: "13",
    title: "Tracks",
    colorcode: "#af2896",
  },
  {
    id: "14",
    title: "Users",
    colorcode: "#8d67ab",
  },
];

export default function Search() {
  const [searhQuery, setsearchQuery] = useState("");
  const [albumdata, setAlbumdata] = useState({});
  const userdatafromredux = useSelector((state) => state.userdata);
  const accesstokendatausingredux = useSelector(
    (state) => state.accestokendata
  );

  function navigatetosearchsectionsscreen({ navigation }) {
    alert("greetings");
  }

  function rendersectiondata(item) {
    return (
      <View style={styles.sectionview}>
        <Pressable
          android_ripple={{ color: "grey" }}
          onPress={navigatetosearchsectionsscreen}
          style={styles.sectionpressable}
          backgroundColor={item.item.colorcode}
        >
          <Text style={styles.sectiontxt}>{item.item.title}</Text>
        </Pressable>
      </View>
    );
  }

  function captureSearchquerytext(Text) {
    setsearchQuery(Text);
  }

  const AlBUMID = "4aawyAB9vmqN3uQ7FjRGTy";

  useEffect(() => {
    axios
      .get(`https://api.spotify.com/v1/albums/${AlBUMID}`, {
        headers: {
          Authorization: `Bearer ${accesstokendatausingredux.access_token}`,
          "Content-Type": "application/json",
        },
        // params: {
        //   market: "ES",
        // },
      })
      .then((res) => {
        console.log(res.data);
        setAlbumdata(res.data);
      })
      .catch((err) => {
        console.log(`Error:${err}`);
      });
  }, [accesstokendatausingredux.access_token]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topsectioncontainer}>
        <View style={styles.profileandsearch}>
          <View style={styles.btncontainer}>
            <Hometopbuttonns indrawer={false}>P</Hometopbuttonns>
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
        <Text style={styles.pickedforyoutxt}>
          Picked for you {userdatafromredux.display_name}
        </Text>
      </View>

      <View style={styles.topalbumcard}>
        <Text>Album card testing </Text>
      </View>

      <View style={styles.browsingsection}>
        <Text style={styles.pickedforyoutxt}>Browse all</Text>
        <View style={styles.flatlistholder}>
          <FlatList
            data={sectionsdata}
            keyExtractor={(item) => item.id}
            renderItem={rendersectiondata}
            numColumns={2}
          />
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
    borderRadius: 10,
    backgroundColor: "yellow",
    height: "15%",
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  browsingsection: {},
  flatlistholder: {
    marginVertical: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
    marginBottom: 50,
  },
  sectionview: {
    // height: 80,
    // width: 120,
    // borderRadius: 8,
    // backgroundColor: "green",
    // marginVertical: 10,
    // marginHorizontal: 10,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  sectionpressable: {
    // height: "100%",
    // width: "100%",
    height: 80,
    width: 120,
    borderRadius: 8,
    // backgroundColor: sectionsdata.item.colorcode,
    marginVertical: 10,
    marginHorizontal: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sectiontxt: {
    color: "white",
  },
});
