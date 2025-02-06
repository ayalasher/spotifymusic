import { View , Text , StyleSheet, Pressable } from "react-native";
import Hometopbuttonns from "../buttons/Hometopbuttons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Search() {
    return <View style={styles.container} >
        <View style={styles.topsectioncontainer} >

                <View style={styles.profileandsearch} >
                    <View style={styles.btncontainer}>
                     <Hometopbuttonns>P</Hometopbuttonns>
                    </View>
                    <Text style={styles.topsectiontxt} >Search</Text>
                </View>

                <View style={styles.cameraiconcontainer}  >
                    <Pressable>
                       <AntDesign name="camerao" size={27} color="white" />
                    </Pressable>
                </View>
                
        </View>
       

    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:50,
        paddingHorizontal:20,
        backgroundColor:"#121212"

    },
    topsectioncontainer:{
    //    backgroundColor:"red",
       flexDirection:"row",
       justifyContent:"space-between"
    },
    profileandsearch:{
       flexDirection:"row",
       alignItems:"center", 
       justifyContent:"center",
       paddingVertical:15
    },

    cameraiconcontainer:{
       flexDirection:"row",
       alignItems:"center", 
       justifyContent:"center"
    },
    topsectiontxt:{
        paddingHorizontal:10,
        fontSize:25,
        fontWeight:"900",
        color:"white"
    } ,
    profilebutton:{
       
    },
    btncontainer:{
    
    },
})