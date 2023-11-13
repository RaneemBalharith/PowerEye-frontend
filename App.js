import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export default function App() {
  const requestUserPermission = async () => {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        return true;
      } else {
        console.log('Failed to get permission');
        return false;
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
      return false;
    }
  };

  useEffect(() => {
    const setupMessaging = async () => {
      const permissionGranted = await requestUserPermission();

      if (permissionGranted) {
        try {
          const token = await messaging().getToken();
          console.log('Token:', token);
          // Here you have to call the token post API
        } catch (error) {
          console.error('Error getting token:', error);
        }
      }
    }
    setupMessaging();

    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Push notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // heres the navigation is done
        }
      });

    messaging().onNotificationOpenedApp(async remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // heres the navigation is done
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage)
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new in-app message arrived!', JSON.stringify(remoteMessage));
      // heres the navigation is done
    });

    return unsubscribe;

  }, [])

  return (
    <View style={styles.container}>
      <Text>Hi, new app powereye</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});



