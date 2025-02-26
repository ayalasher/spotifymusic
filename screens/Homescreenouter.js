import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import Allscreen from "./allscreen";
import Musicscreen from "./musicscreen";
import Poadcastscreen from "./podcastscreen";
import Homescreen from "./Homescreen";

const Tab = createMaterialTopTabNavigator();

export default function MytopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#141714" },
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPressColor: "#2b8a2b",
        tabBarScrollEnabled: false,
        lazy: true,
        swipeVelocityImpact: 0.8,
      }}
    >
      <Tab.Screen
        name="All"
        component={Homescreen}
        options={{
          tabBarItemStyle: { backgroundColor: "#141714" },
          tabBarActiveTintColor: "#2b8a2b",
          tabBarInactiveTintColor: "white",
          tabBarBounces: true,
        }}
      />
      <Tab.Screen
        name="Music"
        component={Musicscreen}
        options={{
          tabBarItemStyle: { backgroundColor: "#141714" },
          tabBarActiveTintColor: "#2b8a2b",
          tabBarInactiveTintColor: "white",
          tabBarBounces: true,
        }}
      />
      <Tab.Screen
        name="Podcast"
        component={Poadcastscreen}
        options={{
          tabBarItemStyle: { backgroundColor: "#141714" },
          tabBarActiveTintColor: "#2b8a2b",
          tabBarInactiveTintColor: "white",
          tabBarBounces: true,
        }}
      />
    </Tab.Navigator>
  );
}

// export default function Homescreenouter() {
//     return <MytopTabs/>
// }
