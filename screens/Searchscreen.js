import { View , Text , StyleSheet } from "react-native";

export default function Search() {
    return <View style={styles.container} >
        <Text>
            Search screen
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:30,
        paddingHorizontal:20,

    }
})