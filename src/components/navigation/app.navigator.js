import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ProfileNavigator } from "./profile.navigation";
import { HomeNavigator } from "./home.navigation";
import { RoomNavigator } from "./room.navigator";
import { NotificationNavigator } from "./notification.navigator";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  useNavigation
} from "@react-navigation/native";
const screenOptions = ({ route }) => ({
  headerShown: false,

  tabBarHideOnKeyboard: true,
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
    if (route.name === "Room") {
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
      <Tab.Screen
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
  
            if (routeName === "totalEnergyConsumption") {
              return { display: "none" };
            }
            if (routeName === "goalAchievementScreen") {
              return { display: "none" };
            }
            if (routeName === "deviceCard") {
              return { display: "none" };
            }
            return;
          })(route),
        })}
        name="Home"
        component={HomeNavigator}
      />
      <Tab.Screen
      options={({ route }) => ({
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? ""

          if (routeName === 'RoomDetails') {
            return { display: "none" }
          }
          return
        })(route),
      })}
      name="Room" component={RoomNavigator} />
      <Tab.Screen name="Notification" component={NotificationNavigator} />
      <Tab.Screen
      options={({ route }) => ({
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? ""

          if (routeName === 'EditProfile') {
            return { display: "none" }
          }
          if (routeName === 'helpCenter') {
            return { display: "none" }
          }
          if (routeName === 'userGuide') {
            return { display: "none" }
          }
          if (routeName === 'FaqScreen') {
            return { display: "none" }
          }
          if (routeName === 'DeletedAccountMessage') {
            return { display: "none" }
          }
          return
        })(route),
      })}
      name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};
