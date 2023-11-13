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

const firebaseConfig = {
  apiKey: 'AIzaSyDIYWrlTYkKUlSweIFzYTYrpdUq17j9QFk',
  // authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'powereye1-e599e',
  storageBucket: 'powereye1-e599e.appspot.com',
  messagingSenderId: '1053939269851',
  // appId: 'YOUR_APP_ID',
  // Android-specific config
  android: {
    // clientId: 'YOUR_ANDROID_CLIENT_ID',
    appId: '1:1053939269851:android:a63b7297efa78a11a54cfe',
    apiKey: 'AIzaSyDRxgRDeRKueM2MmBNjUbKGh5mFYpVOJC4',
    // databaseURL: 'YOUR_ANDROID_DATABASE_URL',
    // messagingSenderId: 'YOUR_ANDROID_MESSAGING_SENDER_ID',
    // measurementId: 'YOUR_ANDROID_MEASUREMENT_ID',
  },
  // iOS-specific config
  ios: {
    // clientId: 'YOUR_IOS_CLIENT_ID',
    appId: '1:1053939269851:ios:2306ad8e01445633a54cfe',
    apiKey: 'AIzaSyDIYWrlTYkKUlSweIFzYTYrpdUq17j9QFk',
    // databaseURL: 'YOUR_IOS_DATABASE_URL',
    messagingSenderId: '1053939269851',
    // measurementId: 'YOUR_IOS_MEASUREMENT_ID',
  },
};


