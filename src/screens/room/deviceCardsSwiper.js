import React, { useContext, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
const windowWidth = Dimensions.get("window").width;
import { DeviceCard } from './deviceCard'
import { PowerEyeContext } from "../../services/powerEye.context";
export const DeviceCardSwiper = ({ devices, onRemoveApplianceFromRoom, navigation }) => {
  const { appliances } = useContext(PowerEyeContext)
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


  console.log('this is from room', devices)
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

          <DeviceCard
            device={item.type}
            username={item.name}
            deviceState={item.status}
            connection={item.connection_status}
            onRemoveApplianceFromRoom={onRemoveApplianceFromRoom}

            id={item.appliance_id}

          />


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
    width: windowWidth * 0.95,
  },
});


