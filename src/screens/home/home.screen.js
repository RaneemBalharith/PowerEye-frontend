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
export const HomeScreen = ({navigation}) => {
  const {username} = useContext(PowerEyeContext)
  const [progress, setProgress] = useState(60);
  const [onAddDevice,setOnAddDevice] = useState(false);
  const [devices , setDevices] = useState([
    { id: "1", title: "coolers", on: true, device: 1 , consumption: 42, cost : 375  },
    { id: "2", title: "lamp", on: false, device: 2, consumption: 42, cost : 375 },

  ])


  const consumption = 421.8;
  const cost = (consumption * 0.8).toFixed(2);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.BodyContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('totalEnergyConsumption')}>
        <TotalEnergyConsumption consumption={consumption} cost={cost} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('goalAchievementScreen')}>
        <GoalAchievement progress={progress} />
        </TouchableOpacity>
        <AddDevice setOnAddDevice={setOnAddDevice} onAddDevice={onAddDevice} />
       
        <DeviceCardSwiper devices={devices} navigation={navigation} />
        <KeyboardAvoidingView>
        <AddDeviceModal onAddDevice={onAddDevice} setOnAddDevice={setOnAddDevice}/>
        </KeyboardAvoidingView>
        
      </View>
      {false && <RetrievePlugsError/>}
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
