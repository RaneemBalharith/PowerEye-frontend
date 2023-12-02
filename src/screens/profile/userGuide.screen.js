import React , {useState} from 'react';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';


export const UserGuide = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={require('../../../assets/UserGuide.pdf')}
      />
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

