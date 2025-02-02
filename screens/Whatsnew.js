import { Text, View , StyleSheet } from "react-native";

export default function Whatsisnew() {
    return <View style={styles.pagecontainer} >
        <Text>
           What is new page 
        </Text>
    </View>
}

const styles = StyleSheet.create({
    pagecontainer:{
        flex:1,
        paddingVertical:30,
        paddingHorizontal:20,
    }
})