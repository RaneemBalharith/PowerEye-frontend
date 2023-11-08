import React, { useState, useContext } from "react";
import { View, Text, Image,StyleSheet , Dimensions } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import { ThemeContext } from '../../services/theme.context';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const TotalEnergyConsumption = ({ consumption, cost }) => {
  const  {theme} = useContext(ThemeContext)
  return (
    <View style={styles(theme).EnergyCard}>
      <View style={styles(theme).CardTitleWrapper}>
        <MaterialCommunityIcons
          name={"lightning-bolt-outline"}
          color={"#f0e089"}
          size={40}
        />
        <Text style={styles(theme).Title}>Total energy Consumption</Text>
      </View>
      <View style={styles(theme).EnergyInfo}>
        <View
          style={styles(theme).iconWrapper}
        >
          <MaterialCommunityIcons
            style={styles(theme).icons}
            name={"power-plug"}
            color={"#00707C"}
            size={25}
          />
          <Text style={styles(theme).EnergyCardText}>{consumption} Kwh</Text>
        </View>
        <View
          style={styles(theme).iconWrapper}
        >
          <FontAwesome5 name={"wallet"} color={"#00707C"} size={18} />
          <Text style={styles(theme).EnergyCardText}>{cost} SAR</Text>
        </View>
        <Entypo name={"login"} color={"#00707C"} size={24} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create((theme)=>({
  EnergyCard: {
    height: windowHeight * 0.17,
    width: windowWidth * 0.9,
    borderRadius: windowHeight * 0.03,
    borderWidth: 2.5,
    borderColor:theme.colors.borderColor,
    margin: theme.space[1],
    padding: theme.space[2],
  },
  Title: {
    fontSize: theme.sizes[2],
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    margin: theme.space[1],
  },
  EnergyCardText: {
    fontSize: theme.sizes[2]*0.8,
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    margin: theme.space[1],
  },
  CardTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  EnergyInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {},
  GoalAchievementCard: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.9,
    borderRadius: windowHeight * 0.02,
    borderWidth: 2.5,
    borderColor: theme.colors.borderColor,
    margin: theme.space[1],
    padding: theme.space[2],
    justifyContent: "center",
  },
  GoalAchievementTitle: {
    fontSize: theme.sizes[2],
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    margin: theme.space[1],
  },
  iconWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.space[2],
  },
}));
