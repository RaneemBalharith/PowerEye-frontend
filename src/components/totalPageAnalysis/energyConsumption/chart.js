import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View,Button, Text } from "react-native";
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import { ActivityIndicator } from "react-native-paper";
import { useContext } from "react";
import { PowerEyeContext } from "../../../services/powerEye.context";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export function Chart({ data , type}) {
  const {roomModalVisible, setRoomModalVisible} = useContext(PowerEyeContext)
  let prefix = () =>{
    if(type == 'cost'){
      return 'Sr'
    }
    if(type == 'energy'){
      return 'Kwh'
    }
    if(type == 'co2'){
      return 'co2'
    }
      }
      let pre = prefix()

   return (
    <View style={styles.container}>
    
      <HorizontalBarGraph
 
         data={data.energy}
         labels={data.label}
         width={windowWidth*0.85}
         height={300}
         barRadius={0}
         barColor={'#45A8AE'}
         baseConfig={{
 
           hasYAxisBackgroundLines: true,
           xAxisLabelStyle: {
             rotation: 0,
             fontSize: 10,
             width: 50,
 
             color: '#1F3334',
     
             decimals: 2,
   
           },
           yAxisLabelStyle: {
             color: '#1F3334',
             rotation: 90,
             fontSize: 10,
             prefix: pre,
             position: 'bottom',
    
             height: 100
           }
         }}
       />
 <Button color={'rgba(255,0,0,0.7)'} title="Delete Room" onPress={()=>setRoomModalVisible(true)}  />
 </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: "center",
     justifyContent:'center',
     margin:100,
     marginTop: 15,
   },
 });