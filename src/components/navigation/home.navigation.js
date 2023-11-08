import React from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import { TotalEnergyConsumptionScreen } from "../../screens/totalEnergyConsumption/totalEnergyConsumption.screen";
import { HomeScreen } from "../../screens/home/home.screen";
import { GoalAchievementScreen } from "../../screens/goalAchievement/goalAchievement.screen";
import { DeviceCardScreen } from "../../screens/deviceCard/deviceCard.screen";
const HomeStack = createStackNavigator();
const screenOptions = ({ route }) => ({
    headerShown: false,
    ...TransitionPresets.ModalPresentaionIOS,
  });
export const HomeNavigator = () => (
  <HomeStack.Navigator  screenOptions={screenOptions}>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}  />
        <HomeStack.Screen name="totalEnergyConsumption" component={TotalEnergyConsumptionScreen}  />
        <HomeStack.Screen name="goalAchievementScreen" component={GoalAchievementScreen}  />
        <HomeStack.Screen name="deviceCard" component={DeviceCardScreen}  />
  </HomeStack.Navigator>
);
