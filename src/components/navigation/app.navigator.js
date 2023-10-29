import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import {ProfileNavigator} from "./profile.navigation";


const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
   
    
    if (route.name === "Profile") {
      iconName = focused ? "account" : "account";
    }
    
    return <MaterialCommunityIcons name={iconName} color={color} size={40} />;
  },
  tabBarActiveTintColor: "#00707C",
  tabBarInactiveTintColor: "gray",
  tabBarShowLabel: false,
});

export const Tab = createBottomTabNavigator();
export const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      
     
    
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};
