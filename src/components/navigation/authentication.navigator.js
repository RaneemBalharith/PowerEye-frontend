import React from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import {LoadingScreen} from "../../screens/loading/loading.screen";
import {LoginScreen} from "../../screens/login/login.screen";
import { SignupScreen } from "../../screens/signup/signup.screen";
const AuthStack = createStackNavigator();
const screenOptions = ({ route }) => ({
    headerShown: false,
    ...TransitionPresets.ModalPresentaionIOS,
  });
export const AuthenticationNavigator = () => (
  <AuthStack.Navigator  screenOptions={screenOptions}>
        <AuthStack.Screen name="laodingScreen" component={LoadingScreen}  />
        <AuthStack.Screen name="LoginScreen" component={LoginScreen}  />
        <AuthStack.Screen name="SignupScreen" component={SignupScreen}  />
  </AuthStack.Navigator>
);
