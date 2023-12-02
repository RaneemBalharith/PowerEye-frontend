import React, { useEffect } from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import { EditPersonalInfoScreen } from "../../screens/profile/EditPersonalInfo.screen";
import { NotificationsScreen } from "../../screens/notification/notification.screen";
const NotificationStack = createStackNavigator();
const screenOptions = ({ route }) => ({

    headerShown: false,
    ...TransitionPresets.ModalPresentaionIOS,
    
  });

export const NotificationNavigator = () => (
  <NotificationStack.Navigator  screenOptions={screenOptions}>
        <NotificationStack.Screen name="NotificationScreen" component={NotificationsScreen}  />
        <NotificationStack.Screen name="editprofile" component={EditPersonalInfoScreen}  />
  </NotificationStack.Navigator>
);
