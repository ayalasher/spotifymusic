import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Fixed import
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer'; 
import Homescreen from './screens/Homescreen';
import Library from './screens/Libraryscreen';
import Search from './screens/Searchscreen';
import Premium from './screens/Premiumscreen';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Createscreen from './screens/Createscreen';
import Profilepage from './screens/Profilepage';
import whatsisnew from './screens/Whatsnew';
import Recents from './screens/Recents';
import settingsandprivacy from './screens/settingsandprivacy';
import addaccount from './screens/Addaccount';
import Addaccount from './screens/Addaccount';
import Settingsandprivacy from './screens/settingsandprivacy';
import Whatsisnew from './screens/Whatsnew';
// import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
// import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Homescreenouter from './screens/Homescreenouter';
import MytopTabs from './screens/Homescreenouter';
// import { StatusBar } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator()
  const Tabs = createBottomTabNavigator()
  const drawer = createDrawerNavigator()



  function Mybottomtabs() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="Homeunseen" component={Mydrawtabs}  options={{ tabBarActiveTintColor:"#2b8a2b" , tabBarInactiveTintColor:"white" ,  tabBarActiveBackgroundColor:"#141714" , tabBarInactiveBackgroundColor:"#141714" ,  headerShown:false , title:"Home" , tabBarIcon:({color, size})=>(<Entypo name="home" size={size} color={color} />)}} />
        <Tabs.Screen name="Search" component={Search}  options={{ tabBarActiveTintColor:"#2b8a2b" , tabBarInactiveTintColor:"white" ,  tabBarActiveBackgroundColor:"#141714" , tabBarInactiveBackgroundColor:"#141714" ,  headerShown:false ,  tabBarIcon:({color, size})=>(<AntDesign name="search1" size={size} color={color} />)  }} />
        <Tabs.Screen name="Library" component={Library} options={{ tabBarActiveTintColor:"#2b8a2b" , tabBarInactiveTintColor:"white" ,  tabBarActiveBackgroundColor:"#141714" , tabBarInactiveBackgroundColor:"#141714" ,  headerShown:false,   tabBarIcon:({color, size})=>(<Ionicons name="library-outline" size={size} color={color} />)}}  />
        <Tabs.Screen name="create" component={Createscreen} options={{ tabBarActiveTintColor:"#2b8a2b" , tabBarInactiveTintColor:"white" ,  tabBarActiveBackgroundColor:"#141714" , tabBarInactiveBackgroundColor:"#141714" ,  headerShown:false  ,   tabBarIcon:({color, size})=>(<Entypo name="add-to-list" size={size} color={color} />)}}  />
        <Tabs.Screen name="Premium" component={Premium} options={{ tabBarActiveTintColor:"#2b8a2b" , tabBarInactiveTintColor:"white" ,  tabBarActiveBackgroundColor:"#141714" , tabBarInactiveBackgroundColor:"#141714" ,  headerShown:false ,  tabBarIcon:({color, size})=>(<Entypo name="spotify" size={size} color={color} />)}}  />
      </Tabs.Navigator>
    )
  }


  function Mydrawtabs() {
    return (
      <drawer.Navigator  screenOptions={{
        drawerStyle:{
          backgroundColor:"#141714",
        }
      }} >
        <drawer.Screen name="Home" component={MytopTabs}  options={{ headerTintColor:"#2b8a2b" ,  headerStyle:{backgroundColor:"#141714"} , drawerActiveBackgroundColor:"#4f5c4f" , drawerActiveTintColor:"#2b8a2b"  , drawerInactiveTintColor:"white" , drawerIcon:({color, size})=>(<Entypo name="home" size={size} color={color} />)}} />
        <drawer.Screen name="Add Account" component={Addaccount}  options={{ headerTintColor:"#2b8a2b" ,  headerStyle:{backgroundColor:"#141714"} ,  drawerActiveBackgroundColor:"#4f5c4f" , drawerActiveTintColor:"#2b8a2b"  , drawerInactiveTintColor:"white" ,  drawerIcon:({color, size})=>(<AntDesign name="pluscircleo" size={size} color={color} />)}} />
        <drawer.Screen name="User" component={Profilepage}  options={{ headerTintColor:"#2b8a2b" ,  headerStyle:{backgroundColor:"#141714"} ,  drawerActiveBackgroundColor:"#4f5c4f" , drawerActiveTintColor:"#2b8a2b"  , drawerInactiveTintColor:"white" ,  drawerIcon:({color, size})=>(<AntDesign name="user" size={size} color={color} />)}} />
        <drawer.Screen name="What's new" component={Whatsisnew}  options={{ headerTintColor:"#2b8a2b" ,  headerStyle:{backgroundColor:"#141714"} ,  headerTintColor:"#2b8a2b" ,  headerStyle:{backgroundColor:"#141714"} ,  drawerActiveBackgroundColor:"#4f5c4f" , drawerActiveTintColor:"#2b8a2b"  , drawerInactiveTintColor:"white" ,  drawerIcon:({color, size})=>(<FontAwesome6 name="bolt-lightning" size={size} color={color} />)}} />
        <drawer.Screen name="Recents" component={Recents}  options={{ headerTintColor:"#2b8a2b" ,  headerStyle:{backgroundColor:"#141714"} ,  drawerActiveBackgroundColor:"#4f5c4f" , drawerActiveTintColor:"#2b8a2b"  , drawerInactiveTintColor:"white" ,  drawerIcon:({color, size})=>(<Entypo name="back-in-time" size={size} color={color} />)}} />
        <drawer.Screen name="Settings and privacy" component={Settingsandprivacy}  options={{ headerTintColor:"#2b8a2b" ,  headerStyle:{backgroundColor:"#141714"} ,  drawerActiveBackgroundColor:"#4f5c4f" , drawerActiveTintColor:"#2b8a2b"  , drawerInactiveTintColor:"white" ,  drawerIcon:({color, size})=>(<AntDesign name="setting" size={size} color={color} />)}} />
      </drawer.Navigator>
    ) 
  }



  return (
    <NavigationContainer>
      {/* <drawer.Navigator></drawer.Navigator> */}
     <Stack.Navigator>
      <Stack.Screen name="mainjoin" component={Mybottomtabs} options={{headerShown:false}} />
     </Stack.Navigator>
     <StatusBar style="light" />
    </NavigationContainer>
  );
}
