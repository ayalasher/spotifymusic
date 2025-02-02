import { Text, View , StyleSheet } from "react-native";

export default function Addaccount() {
    return <View style={styles.pagecontainer} >
        <Text>
            add account page 
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