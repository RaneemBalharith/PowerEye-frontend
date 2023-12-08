import React, { useContext,useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { PowerEyeContext } from '../services/powerEye.context';
import { getRoomEnergyRequest } from '../api/apiManager';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MyRoomComponent = ({ roomName, cost, energy,room, navigation }) => {
  const {convertEnergyToCO2e,convertEnergyToCost,token} = useContext(PowerEyeContext)
  const [roomEnergy , setRoomEnergy]= useState(0);
  const handleNavigate = () => {

    navigation.navigate('RoomDetails',{room}); // Replace 'RoomD' with the actual room page you want to navigate to (Raneem's part)
  };
useEffect(()=>{
  getRoomEnergyRequest(token ,room.id , 'daily' ).then((res)=>{
    if(res){
    setRoomEnergy(res)
  }else{
    setRoomEnergy(0)
  }
  })
},[room])
  return (
    <View style={styles.EnergyCard}>
      
      <LinearGradient
        colors={['#34888F', '#9EB8B5']} style={styles.roomNameBackground}>
        <View style={styles.CardTitleWrapper}>
         
            <Text style={styles.roomName}>{roomName}'s Room</Text>
           
        </View>
      </LinearGradient> 
 
      <View style={styles.EnergyInfo}>
          <MaterialCommunityIcons
            style={styles.icons}
            name={"power-plug"}
            color={"#00707C"}
            size={25}
          />
          <Text style={styles.EnergyCardText}>{roomEnergy.toFixed(3)} Kwh</Text>
          <FontAwesome5 name={"wallet"} color={"#00707C"} size={18} />
          <Text style={styles.EnergyCardText}>{convertEnergyToCost(roomEnergy)} SAR</Text>
          <TouchableOpacity onPress={handleNavigate}>
            <Entypo name={"login"} color={"#00707C"} size={24} style={styles.loginIcon} />
          </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  EnergyCard: {
    height: windowHeight * 0.11,
    width: windowWidth * 0.9,
    borderColor: "rgba(0,0,0,0.3)",
    margin: 10,
    marginTop: 0,
    paddingTop:0,
    padding: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderTopWidth: 0,
    borderRadius: 10,
  },
  roomName: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 10,
    color: "black",
   
    
  },
  EnergyCardText: {
    fontSize: 12,
    color: "#00707C",
    fontWeight: "bold",
   margin:10,
    color: '#00707C',
  },
  CardTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  EnergyInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: windowWidth * 0.9,
  },
  roomNameBackground: {
    borderRadius: 5,
    paddingVertical: 5, 
    width: windowWidth * 0.9,
    
  },
  loginIcon: {
    marginTop:10,
    marginBottom: 20,
    marginLeft: 70,
  },
});

export default MyRoomComponent;