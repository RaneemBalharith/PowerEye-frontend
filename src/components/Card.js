import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Card(props) {
  return (
    <View style={[styles.card, Platform.OS === 'android' && styles.androidCard]}>
      <LinearGradient colors={['#FFFFFF', '#FFFFFF', '#D4E6E8']} start={[0, 0.1]} style={styles.gradient}>
        <View style={[styles.cardContent , Platform.OS === 'android' && styles.androidCardContent]}>
          {props.children}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    shadowOffset: { width: -2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 2,
    marginVertical: 3,
    height: 100,
    width: 110,
  },
  androidCard: {
    borderRadius: 6,
    elevation:7,
    shadowOffset: { width: -2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 1,
    marginVertical: 3,
    height: 80,
    width: 90,
    fontSize: 14,
  },
  gradient: {
    borderRadius: 6,
    overflow: 'hidden',
  },
  cardContent: {
    marginHorizontal: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  androidCardContent:{
    marginHorizontal: 5,
    marginVertical: 20,
    alignItems: 'center',
    fontSize: 5,
  }
});
