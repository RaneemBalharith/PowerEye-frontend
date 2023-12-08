import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function SaveGoal({ text, onPress, error }) {

    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, error && styles.buttonError]}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
  input: {
    // Your existing input styles
    // ...
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  inputError: {
    borderColor: 'red',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 17,
    backgroundColor: "rgba(0,112,124,0.8)",


    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
    textAlign: 'center',
  },
});