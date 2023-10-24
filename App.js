import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export default function App() {
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    if (requestUserPermission()) {
      messaging().getToken().then(token => {
        console.log(token);
        // here you have to call the token post api
      });
    }
    else {
      console.log('failed token status', authStatus)
    }

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



