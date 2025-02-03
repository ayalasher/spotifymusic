import { Text, View , StyleSheet } from "react-native";
import Hometopbuttonns from "../buttons/Hometopbuttons";

export default function Homescreen() {
    return <View style={styles.container} >
        {/* <View style={styles.btncontainer} >
                <Hometopbuttonns>All</Hometopbuttonns>
                <Hometopbuttonns>Music</Hometopbuttonns>
                <Hometopbuttonns>Podcast</Hometopbuttonns>
        </View> */}
        <Text>The home screen testing</Text>
        <Text>Onto the logic . All UI done</Text>
    </View>
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:20,
        paddingHorizontal:20,
        flexDirection:"column"
    },
    btncontainer:{
        alignItems : "center",
        // justifyContent:"space-between",
        justifyContent:"center",
        flexDirection:"row"
    }
})