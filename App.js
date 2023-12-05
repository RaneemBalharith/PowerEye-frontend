import React, { useState, useContext, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Application from 'expo-application';
import { Platform } from 'react-native';
import { sentFcmToken } from './src/api/apiManager';
import messaging from '@react-native-firebase/messaging';
import { Navigation } from "./src/components/navigation";
import { PowerEyeContextProvider, useMyContext } from "./src/services/powerEye.context";
import { ThemeContextProvider } from "./src/services/theme.context";


export default function App() {
  const [getToken, setGetToken] = useState()
  const [notification, setNotifications] = useState()
  const [screenName, setScreenName] = useState('')

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

      if (permissionGranted && getToken) {
        try {

          // console.log(getToken)
          const fcmtoken = await messaging().getToken();
          console.log('Token:', fcmtoken)
          let device_id = Platform.OS === 'ios' ? await Application.getIosIdForVendorAsync() : Application.androidId;

          sentFcmToken(getToken, fcmtoken, device_id).then((res) => {})
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
          if (remoteMessage.notification.title == 'Update Your Password') {
            setScreenName('editprofile')
          }
          console.log(
            'Push notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setScreenName('Notification')
        }
      });

    messaging().onNotificationOpenedApp(async remoteMessage => {
      if (remoteMessage.notification.title == 'Update Your Password') {
        setScreenName('editprofile')
      }
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // heres the navigation is done


    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage)
      remoteMessage
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (remoteMessage) {
        setNotifications({ title: remoteMessage.notification.title, body: remoteMessage.notification.body, id: remoteMessage.messageId })
        if (remoteMessage.notification.title == 'Update Your Password') {
          setScreenName('editprofile')
        }
      }

    });


    return unsubscribe;

  }, [getToken])

  return (
    <PowerEyeContextProvider setGetToken={setGetToken} screenName={screenName} notification={notification} setScreenName={setScreenName}>
      <ThemeContextProvider>

        <Navigation />
      </ThemeContextProvider>
    </PowerEyeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
