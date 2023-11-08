import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";

import {DeviceCard} from './deviceCard'
export const DeviceCardSwiper = ({devices,navigation}) => {
  const flatListRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollForward = () => {
    if (flatListRef.current) {
      const newIndex = scrollIndex + 1;
      if (newIndex < devices.length) {
        flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
        setScrollIndex(newIndex);
      }
    }
  };

  const scrollBackward = () => {
    if (flatListRef.current) {
      const newIndex = scrollIndex - 1;
      if (newIndex >= 0) {
        flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
        setScrollIndex(newIndex);
      }
    }
  };

  const onScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const itemWidth = 150; 
    const newIndex = Math.round(contentOffsetX / itemWidth);
    setScrollIndex(newIndex);
  };



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={scrollBackward}>
        <Fontisto name="angle-left" color="#00707C" size={24} />
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        horizontal
        data={devices}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={()=>navigation.navigate('deviceCard',{item})}>
          <DeviceCard 
          device={item.device}
          username={item.title}
          deviceState={item.on}
          cost = {item.cost}
          consumption={item.consumption}
          
           />
           </TouchableOpacity>
        
           }
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        snapToInterval={150}
      />

      <TouchableOpacity onPress={scrollForward}>
        <Fontisto name="angle-right" color="#00707C" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

