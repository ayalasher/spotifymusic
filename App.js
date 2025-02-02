import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Fixed import
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer'; 
import Homescreen from './screens/Homescreen';
import Library from './screens/Libraryscreen';
import Search from './screens/Searchscreen';
import Premium from './screens/Premiumscreen';
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

export default function App() {
  const Stack = createNativeStackNavigator()
  const Tabs = createBottomTabNavigator()
  const drawer = createDrawerNavigator()



  function Mybottomtabs() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Mydrawtabs}  options={{headerShown:false , tabBarIcon:({color, size})=>(<Entypo name="home" size={size} color={color} />)}} />
        <Tabs.Screen name="Search" component={Search}  options={{headerShown:false ,  tabBarIcon:({color, size})=>(<AntDesign name="search1" size={size} color={color} />)  }} />
        <Tabs.Screen name="Library" component={Library} options={{headerShown:false  ,   tabBarIcon:({color, size})=>(<Ionicons name="library-outline" size={size} color={color} />)}}  />
        <Tabs.Screen name="create" component={Createscreen} options={{headerShown:false  ,   tabBarIcon:({color, size})=>(<Entypo name="add-to-list" size={size} color={color} />)}}  />
        <Tabs.Screen name="Premium" component={Premium} options={{headerShown:false ,  tabBarIcon:({color, size})=>(<Entypo name="spotify" size={size} color={color} />)}}  />
      </Tabs.Navigator>
    )
  }


  function Mydrawtabs() {
    return (
      <drawer.Navigator>
        <drawer.Screen name="bottomtabs" component={Mybottomtabs} />
        <drawer.Screen name="addaccount" component={Addaccount} />
        <drawer.Screen name="whatisnew" component={Whatsisnew} />
        <drawer.Screen name="recents" component={Recents} />
        <drawer.Screen name="settingandprivacy" component={Settingsandprivacy} />
      </drawer.Navigator>
    ) 
  }



  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="mainjoin" component={Mydrawtabs} options={{headerShown:true}} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}
