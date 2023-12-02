import React, { useContext, useEffect, useState } from "react";
import { Dimensions, StyleSheet,Button, View, Text } from "react-native";
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import { ActivityIndicator } from "react-native-paper";
import { PowerEyeContext } from "../../services/powerEye.context";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const Barchart =({ data,type })=> {
  const {modalVisible, setModalVisible , convertEnergyToCO2e,convertEnergyToCost} = useContext(PowerEyeContext)
  const reversedLabels = [...data.label].reverse();
  const reversedEnergy = [...data.energy].reverse();
  let prefix = () =>{
if(type == 'cost'){
  return '(Sr)'
}
if(type == 'energy'){
  return '(Kwh)'
}
if(type == 'co2'){
  return '(co2)'
}
  }
  let pre = prefix()
  let convertedEnergy = () =>{
    if(type == 'cost'){
      return reversedEnergy.map((energy)=>convertEnergyToCost(energy))
    }
    if(type == 'energy'){
      return reversedEnergy
    }
    if(type == 'co2'){
      return reversedEnergy.map((energy)=>convertEnergyToCO2e(energy))
    }
      }
      let energy = convertedEnergy()
  return (
   <View style={styles.container}>
      <HorizontalBarGraph

      data={energy}
      labels={reversedLabels}
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
          prefix:pre,
          position: 'bottom',
          decimals: 3,
          height: 100
        }
      }}
    />
 <Button color={'rgba(255,0,0,0.7)'} title="Delete Appliance" onPress={()=>setModalVisible(true)}  />
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