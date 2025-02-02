import { Text, View , StyleSheet , Pressable } from "react-native";

export default function Hometopbuttonns({children}) {
    return <Pressable style={styles.btncontainer} >
        <Text>
            {children}
        </Text>
    </Pressable>
}

const styles = StyleSheet.create({
    btncontainer:{
        borderRadius:20,
        color:"black",
        backgroundColor:"#2b8a2b",
        paddingVertical:8 ,
        paddingHorizontal:16,
        marginVertical:10, 
        marginHorizontal:10,

    }
})