import React,{useState,useContext} from "react";
import { AppNavigator } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { PowerEyeContext } from "../../services/powerEye.context";
import { Button, Text,View } from "react-native";
export const Navigation = () => {
  const {loggedIn,setLoggedIn} = useContext(PowerEyeContext)
  const TempLoginScreen =()=>{
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>TempLoginScreen</Text>
      <Button onPress={()=>setLoggedIn(true)} title={'test login'} />
      </View>
    )
  }
  return (
  <NavigationContainer>
        {loggedIn ? <AppNavigator/> : <TempLoginScreen/>}
  </NavigationContainer>
  )
};