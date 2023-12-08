

import React, { useState,useContext,useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions, Alert } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { PowerEyeContext } from '../../../../services/powerEye.context';
import { ActivityIndicator } from 'react-native-paper';
import { Barchart } from '../../Barchart';
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
export default function ThirdTabViewWeek({type,weeklyEnergy , weeklyRoute}) {
    const layout = useWindowDimensions();
    const {token,applianceId} = useContext(PowerEyeContext)
    const [index, setIndex] = React.useState(0);
    const [routes,setRoutes] = useState([{"Key": 0, "title": "This Week"}, {"Key": 1, "title": "1 week(s) ago"}, {"Key": 2, "title": "2 week(s) ago"}, {"Key": 3, "title": "3 week(s) ago"}, {"Key": 4, "title": "4 week(s) ago"}]);
    const [data,setData] = useState([]);

      const renderScene = ({ route }) => {

        return (
     <ScrollView>
        <Barchart type={type} data={weeklyEnergy[route.Key]}/>
     </ScrollView>
        );
      };

    return (
      <View style={styles.container}>
      {
      
      weeklyEnergy.length == 0?(
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