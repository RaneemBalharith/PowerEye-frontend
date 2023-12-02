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
import { AntDesign } from "@expo/vector-icons";
import { Icon } from "./devicesIcons";
import { ThemeContext } from "../../services/theme.context";
import { switchApplianceRequest } from "../../api/apiManager";
import { PowerEyeContext } from "../../services/powerEye.context";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const DeviceCard = ({
  deviceState,
  username,
  device,
  consumption,
  connection,
  cost,
  onRemoveApplianceFromRoom,
  id,
}) => {
  const { theme } = useContext(ThemeContext);
  const { token } = useContext(PowerEyeContext);
  const [wifiConnected, setWifiConected] = useState(connection);

  const handleStatus = () => {
    console.log(id);
    switchApplianceRequest(token, id, !deviceState).then((res) => {
      console.log(res);
    });
  };

  return (
    <ImageBackground
      style={styles(theme).image}
      imageStyle={{ borderRadius: 10, opacity: 0.6 }}
      source={
        !false
          ? require("../../../assets/green.jpeg")
          : require("../../../assets/orange.jpeg")
      }
    >
      <AntDesign
        style={{ alignSelf: "flex-end", margin: 2 }}
        name="minuscircle"
        size={15}
        color={"#b30000"}
        onPress={() => onRemoveApplianceFromRoom(id)}
      />

      <View
        style={{
          flexDirection: "row",
          padding: 4,
          justifyContent: "center",
          alignItems: "center",
          marginLeft:5,
        }}
      >
        <Icon
          IconStyle={styles(theme).icons}
          size={40}
          color={"#00707C"}
          id={device}
        />

        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "rgba(0,0,0,0.8)",
          }}
        >
          {username}
        </Text>
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

    height: windowWidth * 0.18,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    height: windowWidth * 0.18,
    borderRadius: 10,
    alignItems: "center",
    padding: theme.space[1],
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.1)",
  },
  cardToolsWrapper: {
    flex: 0.6,
    flexDirection: "row",
    padding: theme.space[0] / 2,
    backgroundColor: theme.colors.blackTransparent,
    alignItems: "center",
    borderRadius: 15,
  },
  cardInfo: {
    alignItems: "center",
  },
  icons: {
    marginRight: 10,
  },
  iconsWrapper: {
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    height: theme.sizes[6],
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
