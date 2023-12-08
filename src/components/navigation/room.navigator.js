import React from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import { RoomScreen } from "../../screens/room/room.screen";
import { Room } from "../../screens/room/room.component";
const RoomStuck = createStackNavigator();
const screenOptions = ({ route }) => ({
    headerShown: false,
    ...TransitionPresets.ModalPresentaionIOS,
  });
export const RoomNavigator = () => (
  <RoomStuck.Navigator  screenOptions={screenOptions}>
        <RoomStuck.Screen name="RoomScreen" component={RoomScreen}  />
        <RoomStuck.Screen name="RoomDetails" component={Room}  />
  </RoomStuck.Navigator>
);