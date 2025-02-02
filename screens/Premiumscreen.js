import { View , Text , StyleSheet } from "react-native";

export default function Premium() {
    return <View style={styles.container} >
        <Text>
            Premium screen
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:50,
        paddingHorizontal:20,

    }
})