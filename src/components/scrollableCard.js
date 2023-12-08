import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {LinearGradient} from 'expo-linear-gradient'; 

const ScrollableCard = ({ devices }) => {
  return (
   <View style={{margin: 15}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {devices.map((device, index) => (
         <LinearGradient colors={['#FFFFFF','#ACD0D4']} start={[0, 0.345]} style={styles.card}>
        <View key={index} style={styles.card}>
            
          <Text style={styles.title}>{device.name}</Text>
        </View>
         </LinearGradient>
      ))}
     
    </ScrollView>
    </View>
   
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: -2, height: -2},
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 2,
    marginVertical:3,
    height: 57,
    width: 87,  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ScrollableCard;