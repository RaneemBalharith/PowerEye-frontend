import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MyRoomComponent = ({ roomName, cost, energy, navigation }) => {
  const handleNavigate = () => {
    navigation.navigate('RoomD'); // Replace 'RoomD' with the actual room page you want to navigate to (Raneem's part)
  };

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
          <Text style={styles.EnergyCardText}>{energy} Kwh</Text>
          <FontAwesome5 name={"wallet"} color={"#00707C"} size={18} />
          <Text style={styles.EnergyCardText}>{cost} SAR</Text>
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
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
    color: "black",
  },
  EnergyCardText: {
    fontSize: 12,
    color: "#00707C",
    fontWeight: "bold",
    margin: 10,
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
  },
  roomNameBackground: {
    borderRadius: 5,
    paddingVertical: 5, 
    margin: 0,
    width: 385,
    height:30,
  },
  loginIcon: {
    marginTop:10,
    marginBottom: 20,
    marginLeft: 190,
  },
});

export default MyRoomComponent;