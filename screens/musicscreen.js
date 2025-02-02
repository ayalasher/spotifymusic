import { Text, View , StyleSheet } from "react-native";

export default function Musicscreen() {
    return <View style={styles.container} >
        <Text>Music screen</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:30,
        paddingHorizontal:20,

    }
})