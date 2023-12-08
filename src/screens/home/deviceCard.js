import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Pressable,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Icon } from "./devicesIcons";
import { ThemeContext } from "../../services/theme.context";
import { switchApplianceRequest ,getApplianceEnergyRequest} from "../../api/apiManager";
import { PowerEyeContext } from "../../services/powerEye.context";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const DeviceCard = ({
  deviceState,
  username,
  device,
  connection,
  appliance,
  id
}) => {
  const { theme } = useContext(ThemeContext);
  const {token,setRefresh,convertEnergyToCost} = useContext(PowerEyeContext)
  const [wifiConnected, setWifiConected] = useState(connection);
  const [deviceStateChange , setDeviceStateChange] = useState(deviceState)
  const [applianceEnergy , setApplianceEnergy] = useState(0)
  const handleStatus = ()=>{
    console.log(id)
    switchApplianceRequest(token,id,!deviceStateChange).then((res)=>{

      setDeviceStateChange(!deviceStateChange)
    })

    
  }

useEffect(()=>{
getApplianceEnergyRequest(token,id,'daily').then(res=>{
  setApplianceEnergy(res)
  })
},[])

  return (
    <ImageBackground
      style={styles(theme).image}
      imageStyle={{ borderRadius: 10, opacity: 0.6 }}
      source={
        !deviceStateChange
          ? require("../../../assets/green.jpeg")
          : require("../../../assets/orange.jpeg")
      }
    >
      <View style={styles(theme).item}>
        <View style={styles(theme).cardToolsWrapper}>
          <View style={styles(theme).iconsWrapper}>
            <Icon
              IconStyle={styles(theme).icons}
              size={20}
              color={"#00707C"}
              id={device}
            />
          </View>

          <View style={styles(theme).iconsWrapper}>
            <TouchableOpacity >
              <MaterialCommunityIcons
                style={styles(theme).icons}
                name="wifi"
                color={wifiConnected ? "#00707C" : "rgba(0,0,0,0.4)"}
                size={20}
              />
            </TouchableOpacity>
          </View>

          <View style={styles(theme).iconsWrapper}>
            <TouchableOpacity onPress={() => handleStatus()}>
              <MaterialCommunityIcons
                style={styles(theme).icons}
                name="power-standby"
                color={deviceStateChange ? "#00707C" : "rgba(0,0,0,0.4)"}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles(theme).cardInfo}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "rgba(0,0,0,0.8)",
            }}
          >
            {username}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                style={{
                  margin: 5,
                }}
                name={"power-plug"}
                color={"#00707C"}
                size={20}
              />
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                {applianceEnergy.toFixed(3)} Kwh
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <FontAwesome5
                style={{
                  margin: 3,
                }}
                name={"wallet"}
                color={"#00707C"}
                size={15}
              />
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                {convertEnergyToCost(applianceEnergy)} SAR
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    margin: theme.space[1],
    alignItems: "center",
    borderRadius: 100,
  },
  item: {
    width: windowWidth * 0.41,
    height: windowWidth * 0.4,
    borderRadius: 10,
    alignItems: "center",
    padding: theme.space[1],
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.1)",
  },
  cardToolsWrapper: {
    flex: 0.6,
    flexDirection: "row",
    padding: theme.space[0]/2,
    backgroundColor: theme.colors.blackTransparent,
    alignItems: "center",
    borderRadius: 15,
  },
  cardInfo: {
    alignItems: "center",
  },
  icons: {
    padding: theme.space[1],
  },
  iconsWrapper: {
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    height:theme.sizes[6],
    width: theme.sizes[6],
  },
  deviceCardWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));
