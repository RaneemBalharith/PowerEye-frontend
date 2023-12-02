import React,{useState,useContext, useEffect} from "react";
import { AppNavigator } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { PowerEyeContext } from "../../services/powerEye.context";
import { Button, Text,View } from "react-native";
import {AuthenticationNavigator} from "./authentication.navigator";
import { Notification } from "../../screens/home/home.screen";
export const Navigation = () => {
  const {token,setRefresh} = useContext(PowerEyeContext)
useEffect(()=>{
  if(token !== ""){
  setRefresh('logged in')
}
},[token])
  return (
  <NavigationContainer>

        {token ? (<>
          
          <AppNavigator/>
        </>

        ) : <AuthenticationNavigator/>}
  </NavigationContainer>
  )
};