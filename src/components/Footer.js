import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState('Home');

  const handleIconPress = (screenName) => {
    setActiveScreen(screenName);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleIconPress('Home')}>
        <MaterialCommunityIcons
          name="home"
          size={35}
          color={activeScreen === 'Home' ? '#00707C' : '#8D9BA4'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleIconPress('Sofa')}>
        <MaterialCommunityIcons
          name="sofa"
          size={35}
          color={activeScreen === 'Sofa' ? '#00707C' : '#8D9BA4'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleIconPress('Bell')}>
        <MaterialCommunityIcons
          name="bell"
          size={35}
          color={activeScreen === 'Bell' ? '#00707C' : '#8D9BA4'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleIconPress('Account')}>
        <MaterialCommunityIcons
          name="account"
          size={35}
          color={activeScreen === 'Account' ? '#00707C' : '#8D9BA4'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,
    width: Dimensions.get('window').width,
    paddingVertical: 10,
    borderTopWidth: 2,
    borderTopColor: 'lightgray'
  },
});

export default Footer;