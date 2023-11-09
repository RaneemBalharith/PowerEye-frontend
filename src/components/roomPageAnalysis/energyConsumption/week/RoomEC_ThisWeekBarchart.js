import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';

export default function RoomEC_ThisWeekBarchart({ navigation }) {
  //API CAll

  return (
    <View style={styles.container}>
      <HorizontalBarGraph
        data={[70, 45, 28, 102, 99, 43, 50]}
        labels={["SUN", "MON", "TUE", "WED", "THU", "FRI"]}
        width={330}
        height={300}
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
            xOffset: -1,
          },
          yAxisLabelStyle: {
            color: '#1F3334',
            rotation: 90,
            fontSize: 13,
            prefix: 'KwH',
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