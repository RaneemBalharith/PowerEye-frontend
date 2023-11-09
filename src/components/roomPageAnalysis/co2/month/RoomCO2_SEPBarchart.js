import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph'


export default function RoomCO2_SEPBarchart({ navigation }) {
  //API CAll

  return (
    <View style={styles.container}>
      <HorizontalBarGraph
        data={[70, 45, 28, 102, 99, 43, 50, 70, 109, 28, 204, 99, 43, 50, 23, 45, 210, 18, 99, 43, 50, 70, 167, 28, 234, 99, 43, 196, 32, 65]}
        labels={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14",
          "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]}
        width={375}
        height={450}
        barRadius={0}
        barColor={'#45A8AE'}
        baseConfig={{
          hasYAxisBackgroundLines: true,
          xAxisLabelStyle: {
            rotation: 0,
            fontSize: 12,
            width: 55,
            yOffset: 4,
            color: '#1F3334',
            xOffset: -15,
          },
          yAxisLabelStyle: {
            color: '#1F3334',
            rotation: 90,
            fontSize: 13,
            prefix: 'Kg',
            position: 'bottom',
            decimals: 2,
            height: 100
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 15,
  },
});