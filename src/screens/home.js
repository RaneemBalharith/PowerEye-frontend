import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

//This page only for making navigation easier, use the home page of Joody
//no need to link this page

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome Home</Text>
        <View >
       
        <Button title="set Goal"   color="black" onPress={() => navigation.navigate('SetGoal')}/> 
        <Button title="total page"  color="black" onPress={() => navigation.navigate('TotalPage')} /> 
        <Button title="Room page"  color="black" onPress={() => navigation.navigate('RoomPage')} /> 
        <Button title="Applaince page"  color="black" onPress={() => navigation.navigate('ApplaincePage')} /> 
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  }, 
  text: {
    margin: 35,
    fontSize: 25,
    alignItems: 'center',
  }, 
 
});