import { Text, View , StyleSheet } from "react-native";
// import Hometopbuttonns from "../buttons/Hometopbuttons";
// import axios from "axios"
import axios from "axios";
import { useEffect } from "react";
import {makeRedirectUri} from "expo-auth-session"
import * as WebBrowser from "expo-web-browser"

WebBrowser.maybeCompleteAuthSession()

export default function Homescreen() {

    const client_id = "67e17de60bac47109bf1f9b6b64f91ed"
    const redirect_uri = "https://spotifyredirectionwebsite.vercel.app/"


    const state = "spotify_auth_state"
    const scope = "user-read-private user-read-email"


    const authorize = async () => {
        try {
            console.log("Starting authorization...");
            const authUrl = `https://accounts.spotify.com/authorize?` +
                `client_id=${client_id}` +
                `&response_type=code` +
                `&redirect_uri=${encodeURIComponent(redirect_uri)}` +
                `&scope=${encodeURIComponent(scope)}` +
                `&state=${state}`;

            console.log("Auth URL:", authUrl);
            const result = await WebBrowser.openAuthSessionAsync(
                authUrl,
                redirect_uri,
                { showInRecents: true }
            );
            
            console.log("Auth Result:", result);

            if (result.type === 'success') {
                const { code, state } = parseUrl(result.url);
                console.log('Auth code:', code);
                return code;
            }
        } catch (error) {
            console.error('Authorization error:', error);
        }
    };

    // const values  = {
    //     response_type:"code",
    //     client_id:client_id,
    //     scope: scope ,
    //     redirect_uri:redirect_uri,
    //     state:state
    // }

    // const stringvalues = toString(values)

    useEffect(()=>{
        // axios.get("https://accounts.spotify.com/authorize?"+ stringvalues ).then(response=>{
        //     console.log(response.data);
            
        // }).catch(err=>{
        //     console.log("The error is ", err );
            
        // })
        authorize()
    },[])



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