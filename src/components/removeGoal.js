import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function RemoveGoal({ text , onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
      <MaterialIcons name="delete" size={18} color="#fff" />

        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#B43232',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
  }
});