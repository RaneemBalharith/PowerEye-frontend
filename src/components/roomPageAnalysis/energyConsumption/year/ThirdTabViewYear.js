

import React, { useState,useContext,useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions, Alert } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { PowerEyeContext } from '../../../../services/powerEye.context';
import { Barchart } from '../../Barchart';
import { ActivityIndicator } from 'react-native-paper';
const renderTabBar = props => (
    <TabBar
    
        scrollEnabled
        {...props}
        activeColor={'#00707C'}
        inactiveColor={'#8D9BA4'}
        indicatorStyle={{ backgroundColor: '#00707C' }}
        style={{ backgroundColor: '#F0F8F9' }}
        labelStyle={{ fontSize: 14, fontFamily: 'Arial', textTransform: 'none' }} // Apply custom style to labelStyle prop


    />
);
export default function ThirdTabViewYear({type , yearlyRoute , yearlyEnergy}) {
    const layout = useWindowDimensions();
    const {token,applianceId} = useContext(PowerEyeContext)
    const [index, setIndex] = React.useState(0);
    const [routes,setRoutes] = useState([{"Key": 0, "title": "Year 2023"}, {"Key": 1, "title": "Year 2022"}, {"Key": 2, "title": "Year 2021"}, {"Key": 3, "title": "Year 2020"}, {"Key": 4, "title": "Year 2019"}]);
    const [data,setData] = useState([]);


      const renderScene = ({ route }) => {
        return (
     <ScrollView>
        <Barchart type={type} data={yearlyEnergy[route.Key]}/>
     </ScrollView>
        );
      };


    return (
      <View style={styles.container}>
      {
      
      yearlyEnergy.length == 0?(
        <View style={styles.tabContainer}>
            <ActivityIndicator size={'small'} color='#00707C' />
        </View>
        
        

      ):( 
            <View style={styles.tabContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    renderTabBar={renderTabBar}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}

                />
            </View>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F8F9',
    },

    tabContainer: {
        flex: 1,
        backgroundColor: '#F0F8F9',
    },

});