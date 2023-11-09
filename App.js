import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './src/navigation/stackNavigator';
import { I18nManager} from 'react-native';



I18nManager.allowRTL(false);
const Stack = createStackNavigator();

const App = () =>{
  return(
  
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    
  );
};


export default App; 