import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, Image } from 'react-native';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const StartingPage = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      
        <View style={styles.logoContainer}>
        <Image source={require('../assets/images/PowerEyeFullLogo.png')} style={styles.LogInPic} />
          <Text style={styles.loadingText}>Loading...</Text>
          <ActivityIndicator size="small" color="#00707C" />
        </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
 
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#00707C',
  },
});

export default StartingPage;