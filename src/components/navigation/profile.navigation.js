import React from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import { ProfileScreen } from "../../screens/profile/profile.screen";
import {EditPersonalInfoScreen} from "../../screens/profile/EditPersonalInfo.screen";
import {HelpCenterScreen} from "../../screens/profile/helpCenter.screen"
import { UserGuide } from "../../screens/profile/userGuide.screen";
import { FaqScreen } from "../../screens/profile/faq.screen";
import { DeletedAccountMessage } from "../../screens/profile/deletedAccountMessage";

const ProfileStuck = createStackNavigator();
const screenOptions = ({ route }) => ({
    headerShown: false,
    ...TransitionPresets.ModalPresentaionIOS,
  });
export const ProfileNavigator = () => (
  <ProfileStuck.Navigator  screenOptions={screenOptions}>
        <ProfileStuck.Screen name="profile" component={ProfileScreen}  />
        <ProfileStuck.Screen name="EditProfile" component={EditPersonalInfoScreen}  />
        <ProfileStuck.Screen name="helpCenter" component={HelpCenterScreen}  />
        <ProfileStuck.Screen initialRouteName={"helpCenter"} name="userGuide" component={UserGuide}  />
        <ProfileStuck.Screen initialRouteName={"helpCenter"} name="FaqScreen" component={FaqScreen}  />
        <ProfileStuck.Screen name="DeletedAccountMessage" component={DeletedAccountMessage}  />
  </ProfileStuck.Navigator>
);