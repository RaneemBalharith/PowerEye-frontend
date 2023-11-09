import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import GradientProgressBar from './GradientProgressBar';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const GoalAchievement = ({ progress }) => {
  return (
    <View style={styles.GoalAchievementCard}>
      <View style={styles.CardTitleWrapper}>
        <FontAwesome5
          style={{ marginLeft: 30 }}
          name={"trophy"}
          color={"#00707C"}
          size={20}
        />
        <Text style={styles.GoalAchievementTitle}>Goal Achievement</Text>
      </View>
      <View style={styles.progressBarWarapper}>
        <Text style={styles.progress}>
            {progress} SAR
        </Text>
        <GradientProgressBar
          progress={progress}
          width={windowWidth*0.65}
          height={7}
          borderRadius={5}
        />
        <Text style={styles.progress}>
        {100-progress} SAR
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  CardTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  GoalAchievementCard: {
    marginTop: 50,
    borderRadius: windowHeight * 0.02,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    margin: 10,
    padding: 15,
    justifyContent: "center",
    backgroundColor: '#fff',
  },
  GoalAchievementTitle: {
    fontSize: 14,
    color: "#00707C",
    fontWeight: "bold",
    margin: 10,
  },
  progressBarWarapper: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems: "center",
    marginBottom: 10,
  },
  progress:{
    fontSize:10,
    color:'#00707C',
    margin:3,
    fontWeight:'bold',
  }
});
