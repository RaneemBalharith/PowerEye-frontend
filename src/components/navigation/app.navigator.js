import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { NotificationsScreen } from "../../screens/notification/notification.screen";
import {ProfileNavigator} from "./profile.navigation";
import {HomeNavigator} from "./home.navigation";
import { SofaScreen } from "../../screens/Sofa/sofa.scree";
const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === "Home") {
      iconName = "home";
    }
    if (route.name === "Notification") {
      iconName = focused ? "bell" : "bell";
    }
    if (route.name === "Profile") {
      iconName = focused ? "account" : "account";
    }
    if (route.name === "Sofa") {
      iconName = focused ? "sofa" : "sofa";
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
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Sofa" component={SofaScreen} />
      <Tab.Screen name="Notification" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};
