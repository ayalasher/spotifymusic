import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Fixed import
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Homescreen from "./screens/Homescreen";
import Library from "./screens/Libraryscreen";
import Search from "./screens/Searchscreen";
import Premium from "./screens/Premiumscreen";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Createscreen from "./screens/Createscreen";
import Profilepage from "./screens/Profilepage";
import whatsisnew from "./screens/Whatsnew";
import Recents from "./screens/Recents";
import settingsandprivacy from "./screens/settingsandprivacy";
import addaccount from "./screens/Addaccount";
import Addaccount from "./screens/Addaccount";
import Settingsandprivacy from "./screens/settingsandprivacy";
import Combineplaylist from "./screens/Combineplaylist";
import Personalplaylist from "./screens/Personalplaylist";
import Whatsisnew from "./screens/Whatsnew";
// import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from "@expo/vector-icons/Ionicons";
// import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Homescreenouter from "./screens/Homescreenouter";
import MytopTabs from "./screens/Homescreenouter";
import { SlideInUp } from "react-native-reanimated";
import { TransitionPresets } from "@react-navigation/bottom-tabs";
// import { StatusBar } from 'react-native';
import store from "./redux/store";
import { Provider } from "react-redux";
import Searchresultsscreen from "./screens/Searchresults";
import Searchalbumscreen from "./screens/searchalbumscreen";
import Searchsectionsscreen from "./screens/Searchsectionsscreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tabs = createBottomTabNavigator();
  const drawer = createDrawerNavigator();

  function Createscreenstack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Create"
          component={Createscreen}
          options={{
            presentation: "modal",
            headerShown: false,
            title: "Create",
          }}
        />
      </Stack.Navigator>
    );
  }

  function Mybottomtabs() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen
          name="Homeunseen"
          component={Mydrawtabs}
          options={{
            tabBarActiveTintColor: "#19e68c",
            tabBarInactiveTintColor: "white",
            tabBarActiveBackgroundColor: "#141714",
            tabBarInactiveBackgroundColor: "#141714",
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Search"
          component={Search}
          options={{
            tabBarActiveTintColor: "#19e68c",
            tabBarInactiveTintColor: "white",
            tabBarActiveBackgroundColor: "#141714",
            tabBarInactiveBackgroundColor: "#141714",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="search1" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Library"
          component={Library}
          options={{
            tabBarActiveTintColor: "#19e68c",
            tabBarInactiveTintColor: "white",
            tabBarActiveBackgroundColor: "#141714",
            tabBarInactiveBackgroundColor: "#141714",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="library-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Create"
          component={Createscreenstack}
          options={{
            tabBarActiveTintColor: "#19e68c",
            tabBarInactiveTintColor: "white",
            tabBarActiveBackgroundColor: "#141714",
            tabBarInactiveBackgroundColor: "#141714",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="add-to-list" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Premium"
          component={Premium}
          options={{
            tabBarActiveTintColor: "#19e68c",
            tabBarInactiveTintColor: "white",
            tabBarActiveBackgroundColor: "#141714",
            tabBarInactiveBackgroundColor: "#141714",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="spotify" size={size} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }

  function Mydrawtabs() {
    return (
      <drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#141714",
          },
        }}
      >
        <drawer.Screen
          name="Home"
          component={MytopTabs}
          options={{
            headerTintColor: "#19e68c",
            headerStyle: { backgroundColor: "#141714" },
            drawerActiveBackgroundColor: "#4f5c4f",
            drawerActiveTintColor: "#19e68c",
            drawerInactiveTintColor: "white",
            drawerIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <drawer.Screen
          name="Add Account"
          component={Addaccount}
          options={{
            headerTintColor: "#19e68c",
            headerStyle: { backgroundColor: "#141714" },
            drawerActiveBackgroundColor: "#4f5c4f",
            drawerActiveTintColor: "#19e68c",
            drawerInactiveTintColor: "white",
            drawerIcon: ({ color, size }) => (
              <AntDesign name="pluscircleo" size={size} color={color} />
            ),
          }}
        />
        <drawer.Screen
          name="User"
          component={Profilepage}
          options={{
            headerTintColor: "#19e68c",
            headerStyle: { backgroundColor: "#141714" },
            drawerActiveBackgroundColor: "#4f5c4f",
            drawerActiveTintColor: "#19e68c",
            drawerInactiveTintColor: "white",
            drawerIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
        />
        <drawer.Screen
          name="What's new"
          component={Whatsisnew}
          options={{
            headerTintColor: "#19e68c",
            headerStyle: { backgroundColor: "#141714" },
            headerTintColor: "#19e68c",
            headerStyle: { backgroundColor: "#141714" },
            drawerActiveBackgroundColor: "#4f5c4f",
            drawerActiveTintColor: "#19e68c",
            drawerInactiveTintColor: "white",
            drawerIcon: ({ color, size }) => (
              <FontAwesome6 name="bolt-lightning" size={size} color={color} />
            ),
          }}
        />
        <drawer.Screen
          name="Recents"
          component={Recents}
          options={{
            headerTintColor: "#19e68c",
            headerStyle: { backgroundColor: "#141714" },
            drawerActiveBackgroundColor: "#4f5c4f",
            drawerActiveTintColor: "#19e68c",
            drawerInactiveTintColor: "white",
            drawerIcon: ({ color, size }) => (
              <Entypo name="back-in-time" size={size} color={color} />
            ),
          }}
        />
        <drawer.Screen
          name="Settings and privacy"
          component={Settingsandprivacy}
          options={{
            headerTintColor: "#19e68c",
            headerStyle: { backgroundColor: "#141714" },
            drawerActiveBackgroundColor: "#4f5c4f",
            drawerActiveTintColor: "#19e68c",
            drawerInactiveTintColor: "white",
            drawerIcon: ({ color, size }) => (
              <AntDesign name="setting" size={size} color={color} />
            ),
          }}
        />
      </drawer.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <drawer.Navigator></drawer.Navigator> */}
        <Stack.Navigator>
          <Stack.Screen
            name="mainjoin"
            component={Mybottomtabs}
            options={{ headerShown: false, title: "Back" }}
          />
          <Stack.Screen
            name="Searchresults"
            component={Searchresultsscreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Searchalbum"
            component={Searchalbumscreen}
            options={{
              headerShown: true,
              headerTitleStyle: { color: "white" },
              title: "Picked for you",
              headerStyle: {
                backgroundColor: "#121212",
              },
            }}
          />

          <Stack.Screen
            name="Searchsection"
            component={Searchsectionsscreen}
            options={{
              headerShown: true,
              headerTitleStyle: { color: "white" },
              title: "Browse all",
              headerStyle: {
                backgroundColor: "#121212",
              },
              // headerTitleAlign: "left",
            }}
          />

          <Stack.Screen
            name="Blend playlist"
            component={Combineplaylist}
            options={{
              headerShown: true,
              headerTitleStyle: { color: "white" },
              title: "Blend playlist",
              headerStyle: {
                backgroundColor: "#121212",
              },
              // headerTitleAlign: "left",
            }}
          />

          <Stack.Screen
            name="Personal playlist"
            component={Personalplaylist}
            options={{
              headerShown: true,
              headerTitleStyle: { color: "white" },
              title: "Personal playlist",
              headerStyle: {
                backgroundColor: "#121212",
              },
              // headerTitleAlign: "left",
            }}
          />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </Provider>
  );
}
