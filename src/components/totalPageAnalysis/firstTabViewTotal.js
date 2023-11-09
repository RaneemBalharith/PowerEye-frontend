import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SecondTabView_totalEC from './energyConsumption/secondTabView_totalEC';
import SecondTabView_totalCost from './cost/secondTabView_totalCost';
import SecondTabView_totalCO2 from './co2/secondTabView-totalCO2';

const Energy = () => (
    <View style={{ flex: 1 }} >
      
       <SecondTabView_totalEC />
    
    </View>
);

const Cost = () => (
    <View style={{ flex: 1 }} >
      <SecondTabView_totalCost />
    
     
    </View>

);

const CO2 = () => (
    <View style={{ flex: 1 }} >
        <SecondTabView_totalCO2 />
 
        
    </View>
);

const renderScene = SceneMap({
    energy: Energy,
    cost: Cost,
    co2: CO2,
});

const renderTabBar = props => (
    <TabBar
        {...props}
        activeColor={'#00707C'}
        inactiveColor={'#8D9BA4'}
        indicatorStyle={{ backgroundColor: '#00707C' }}
        style={{  backgroundColor: '#F0F8F9' }}
        labelStyle={{ fontSize: 14, fontFamily: 'Arial', textTransform: 'none'}} // Apply custom style to labelStyle prop


    />
);



export default function FirstTabView({ navigation }) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'energy', title: 'Energy Consumption' },
        { key: 'cost', title: 'Cost' },
        { key: 'co2', title: 'CO2' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={({ route }) => {
                        switch (route.key) {
                            case 'energy':
                                return <Energy />;
                            case 'cost':
                                return <Cost />;
                            case 'co2':
                                return <CO2 />;
                            default:
                                return null;
                        }
                    }}
                    renderTabBar={renderTabBar}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    
                />
            </View>
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