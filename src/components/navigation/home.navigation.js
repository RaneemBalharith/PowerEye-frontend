import React, { useEffect } from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import { TotalEnergyConsumptionScreen } from "../../screens/totalEnergyConsumption/totalEnergyConsumption.screen";
import { HomeScreen } from "../../screens/home/home.screen";
import { GoalAchievementScreen } from "../../screens/goalAchievement/goalAchievement.screen";
import { DeviceCardScreen } from "../../screens/deviceCard/deviceCard.screen";
import { EditPersonalInfoScreen } from "../../screens/profile/EditPersonalInfo.screen";
const HomeStack = createStackNavigator();
const screenOptions = ({ route }) => ({

    headerShown: false,
    ...TransitionPresets.ModalPresentaionIOS,
    
  });

export const HomeNavigator = () => (
  <HomeStack.Navigator  screenOptions={screenOptions}>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}  />
        <HomeStack.Screen  name="totalEnergyConsumption" component={TotalEnergyConsumptionScreen}  />
        <HomeStack.Screen name="goalAchievementScreen" component={GoalAchievementScreen}  />
        <HomeStack.Screen name="deviceCard" component={DeviceCardScreen}  />
        <HomeStack.Screen name="editprofile" component={EditPersonalInfoScreen}  />
  </HomeStack.Navigator>
);
