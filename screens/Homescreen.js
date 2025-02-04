import { Text, View , StyleSheet } from "react-native";
import axios from "axios";
import { useEffect , useState } from "react";
import {makeRedirectUri} from "expo-auth-session"
import * as WebBrowser from "expo-web-browser"
import * as AuthSession from "expo-auth-session"


WebBrowser.maybeCompleteAuthSession()

export default function Homescreen() {

    // States for the authorization
    const [token, setToken] = useState(null)
    const [userData, setUserData] = useState(null)


    // Spotify API credentials
    const client_id = "67e17de60bac47109bf1f9b6b64f91ed"
    const client_secret ="c78ab835ab8941b4a467d14217a39f9f"
    const response_type ="code"
    const state = "spotify-reactnative-clone"
    const redirect_URI = "https://spotifyredirectionwebsite.vercel.app/"
    const scope =  [
        'user-read-private',
        'user-read-email',
        'user-read-currently-playing',
        'user-read-playback-state',
        'user-modify-playback-state',
    ].join(' ')


    const authorize = async () => {
        try {
            console.log("Starting authorization...");
            const authUrl = `https://accounts.spotify.com/authorize?` +
                `client_id=${client_id}` +
                `&response_type=${response_type}` +
                `&redirect_uri=${encodeURIComponent(redirect_URI)}` +
                `&scope=${encodeURIComponent(scope)}` +
                `&show_dialog=true` +  // Force showing auth dialog
                `&state=${state}`;

            console.log("Auth URL:", authUrl);
            const result = await WebBrowser.openAuthSessionAsync(
                authUrl,
                redirect_URI,
                { 
                    showInRecents: true,
                    preferEphemeralSession: false 
                    
                }
            );
            
            console.log("Auth Result:", result);

            switch(result.type) {
                case 'success':
                    const { code, state } = parseUrl(result.url);
                    console.log('Auth code:', code);
                    return code;
                case 'dismiss':
                    console.log('Auth was dismissed');
                    // Handle retry logic here
                    break;
                default:
                    console.log('Unknown response type:', result.type);
            }
        } catch (error) {
            console.error('Authorization error:', error);
        }
    };

    useEffect(()=>{
        authorize();
    },[])



    return <View style={styles.container} >
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