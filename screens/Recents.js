import { Text, View , StyleSheet } from "react-native";

export default function Recents() {
    return <View style={styles.pagecontainer} >
        <Text>
            Recents page 
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