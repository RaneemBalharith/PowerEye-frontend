import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import GradientProgressBar from "./GradientProgressBar";
import { ThemeContext } from "../../services/theme.context";
import { PowerEyeContext } from "../../services/powerEye.context";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const GoalAchievement = () => {
  const { energyGoal, progress, currentMonthEnergy, convertEnergyToCost } = useContext(PowerEyeContext)

  const { theme } = useContext(ThemeContext)
  return (
    <View style={styles(theme).GoalAchievementCard}>
      <View style={styles(theme).CardTitleWrapper}>
        <FontAwesome5
          style={{ marginLeft: 30 }}
          name={"trophy"}
          color={"#00707C"}
          size={20}
        />
        <Text style={styles(theme).GoalAchievementTitle}>Goal Achievement</Text>
      </View>
      <View style={styles(theme).progressBarWarapper}>
        <Text style={styles(theme).progress}>
          {convertEnergyToCost(currentMonthEnergy)} SR
        </Text>
        <GradientProgressBar
          progress={energyGoal > 0 ? (currentMonthEnergy / energyGoal) * 100 : 0}
          width={windowWidth * 0.60}
          height={7}
          borderRadius={5}
        />
        <Text style={styles(theme).progress}>
          {convertEnergyToCost(energyGoal)} SR
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create((theme) => ({
  CardTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
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
  progressBarWarapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: theme.space[1],
  },
  progress: {
    fontSize: theme.sizes[1],
    color: theme.colors.primary,
    margin: theme.space[0],
    fontWeight: theme.fontWeights.bold,
  }
}));