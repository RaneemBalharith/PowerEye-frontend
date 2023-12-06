import React, { useState , useEffect , useContext} from "react";
import { View, StyleSheet,KeyboardAvoidingView,TouchableOpacity } from "react-native";
import { Header } from "./header";
import { GoalAchievement } from "./goalAchievement";
import { TotalEnergyConsumption } from "./totalEnergyConsumption";
import { AddDevice } from "./adddevice";
import { DeviceCardSwiper } from "./deviceCardsSwiper";
import { AddDeviceModal } from "./addDeviceModal";
import { RetrievePlugsError } from "./unableToRetrievePlugs";
import { PowerEyeContext } from "../../services/powerEye.context";
import * as Application from 'expo-application';
import { Platform } from 'react-native';


export const HomeScreen = ({navigation}) => {
  const {currentMonthEnergy,convertEnergyToCost,smartPlugs,setNavigateTo,screenName} = useContext(PowerEyeContext)

  const [onAddDevice,setOnAddDevice] = useState(false);
  if(screenName){
    navigation.navigate(screenName)
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.BodyContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('totalEnergyConsumption')}>
        <TotalEnergyConsumption consumption={currentMonthEnergy} cost={convertEnergyToCost(currentMonthEnergy)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('goalAchievementScreen')}>
        <GoalAchievement  />
        </TouchableOpacity>

        <AddDevice setOnAddDevice={setOnAddDevice} onAddDevice={onAddDevice} />
       
        <DeviceCardSwiper  navigation={navigation} />
        <KeyboardAvoidingView>
        <AddDeviceModal onAddDevice={onAddDevice} setOnAddDevice={setOnAddDevice}/>
        </KeyboardAvoidingView>
        
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BodyContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },

  
});
