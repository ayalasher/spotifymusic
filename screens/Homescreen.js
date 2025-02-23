import { Text, View, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { makeRedirectUri } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import buffer from "buffer";
import Hometopbuttonns from "../buttons/Hometopbuttons";
import { useDispatch, useSelector } from "react-redux";
import { updateuserdata } from "../redux/store";
import { updateaccesstokendata } from "../redux/store";

WebBrowser.maybeCompleteAuthSession();

export default function Homescreen() {
  // States for the authorization
  const [accessTokenresults, setaccessTokenresults] = useState({});
  const [userData, setUserData] = useState({});

  const userdatausingredux = useSelector((state) => state.userdata);
  const accesstokendatausingredux = useSelector(
    (state) => state.accestokendata
  );
  const dispatch = useDispatch();

  // Spotify API credentials
  const client_id = "67e17de60bac47109bf1f9b6b64f91ed";
  const client_secret = "c78ab835ab8941b4a467d14217a39f9f";
  const response_type = "code";
  const state = "spotify-reactnative-clone";
  const redirect_URI = "exp://192.168.100.10:8081";
  const scope = [
    "user-read-private",
    "user-read-email",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "app-remote-control",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
    "user-follow-modify",
    "user-follow-read",
    "user-read-recently-played",
    "user-top-read",
    "user-library-modify",
    "user-library-read",
  ].join(" ");

  const authorize = async () => {
    try {
      const authUrl =
        `https://accounts.spotify.com/authorize?` +
        `client_id=${client_id}` +
        `&response_type=${response_type}` +
        `&redirect_uri=${encodeURIComponent(redirect_URI)}` +
        `&scope=${encodeURIComponent(scope)}` +
        `&show_dialog=true` + // Force showing auth dialog
        `&state=${state}`;

      console.log("Auth URL:", authUrl);
      const result = await WebBrowser.openAuthSessionAsync(
        authUrl,
        redirect_URI,
        {
          showInRecents: true,
          preferEphemeralSession: false,
        }
      );

      console.log("Auth Result:", result);

      const parseUrl = (url) => {
        if (!url) return {};

        const regex = /[#?&]([^=#]+)=([^&#]*)/g;
        const params = {};
        let match;

        while ((match = regex.exec(url))) {
          params[match[1]] = decodeURIComponent(match[2]);
        }

        return {
          code: params.code || null,
          state: params.state || null,
          error: params.error || null,
        };
      };

      switch (result.type) {
        case "success":
          const { code, state } = parseUrl(result.url);
          console.log("Auth code is :", code);
          console.log("state obtained is : ", state);

          // requesting the access token
          // The params object
          const body_params = {
            grant_type: "authorization_code",
            code: `${code}`,
            redirect_uri: "exp://192.168.100.10:8081",
          };

          // Base 64 encoding the variables using btoa
          const encode_credentials = (client_id, client_secret) => {
            const credentials = `${client_id}:${client_secret}`;
            return ` Basic ${btoa(credentials)}`;
          };
          const encoded_elements_header = encode_credentials(
            client_id,
            client_secret
          );

          // The header object
          const header_params = {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `${encoded_elements_header}`,
          };

          // The axios post request
          axios
            .post("https://accounts.spotify.com/api/token", body_params, {
              headers: {
                "Content-Type": header_params["Content-Type"],
                Authorization: header_params.Authorization,
              },
            })
            .then((res) => {
              console.log(res.data);
              setaccessTokenresults(res.data);
              dispatch(updateaccesstokendata(res.data));
            })
            .catch((err) => {
              console.log(`Error:${err}`);
            });

          // Getting User data

          return code;
        case "dismiss":
          console.log("Auth was dismissed");
          // Handle retry logic here
          break;
        default:
          console.log("Unknown response type:", result.type);
      }
    } catch (error) {
      console.error("Authorization error:", error);
    }
  };

  useEffect(() => {
    authorize();
    // getuserdata();
  }, []);

  useEffect(() => {
    //getting user data after authorization by using the access token...
    if (accessTokenresults.access_token) {
      const header_fordata = {
        Authorization: `Bearer  ${accessTokenresults.access_token} `,
      };
      console.log(`${header_fordata.Authorization}`);

      axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: header_fordata.Authorization,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          // Using the access token to get the user data
          console.log(res.data);
          setUserData(res.data);
          dispatch(updateuserdata(res.data));
        })
        .catch((err) => {
          console.log(err);
          console.log("axios for the GET USER ");
        });
    } else {
      console.log("access token missing");
    }
  }, [accessTokenresults.access_token]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topsectioncontainer}>
        <Hometopbuttonns>P</Hometopbuttonns>
      </View>

      <Text style={styles.introtxt}>The home screen testing</Text>
      <Text style={styles.introtxt}>Onto the logic . All UI done</Text>
      <Text style={styles.introtxt}>Acess token result</Text>
      <Text style={styles.introtxt}>
        The user is : {userdatausingredux.display_name} something something
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "column",
    backgroundColor: "#121212",
  },
  btncontainer: {
    alignItems: "center",
    // justifyContent:"space-between",
    justifyContent: "center",
    flexDirection: "row",
  },
  topsectioncontainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  introtxt: {
    color: "white",
  },
});
