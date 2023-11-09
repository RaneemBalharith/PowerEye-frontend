import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ThirdTabView_ApplianceWeekCO2 from '../co2/week/thirdTabView_ApplianceWeekCO2';
import ThirdTabView_ApplianceMonthCO2 from '../co2/month/thirdTabView_ApplianceMonthCO2';
import ThirdTabView_ApplianceYearCO2 from '../co2/year/thirdTabView_ApplianceYearCO2';
const Week = () => (
   
    <View style={{ flex: 1 }} >
           <ThirdTabView_ApplianceWeekCO2 />

    </View>
   
);

const Month = () => (
    <View style={{ flex: 1 }} >
        <ThirdTabView_ApplianceMonthCO2 />
    </View>

);

const Year = () => (
    <View style={{ flex: 1 }} >
      <ThirdTabView_ApplianceYearCO2 />
    </View>
);

const renderScene = SceneMap({
    week: Week,
    month: Month,
    year: Year,
});

const renderTabBar = props => (
    <TabBar
        {...props}
        activeColor={'#1F3334'}
        inactiveColor={'#8D9BA4'}
        indicatorStyle={{ opacity: 0 }}
        style={{
            backgroundColor: '#00707C', marginLeft: 60, marginRight: 60, marginTop: 25, borderRadius: 25, shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOffset: { width: 2, height: 2 }, shadowRadius: 6, shadowOpacity: 1,
        }}
        labelStyle={{ fontSize: 15, textTransform: 'none' }} // Apply custom style to labelStyle prop


    />
);





export default function SecondTabView_ApplianceCO2({ navigation }) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'week', title: 'Week' },
        { key: 'month', title: 'Month' },
        { key: 'year', title: 'Year' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={({ route }) => {
                        switch (route.key) {
                            case 'week':
                                return <Week />;
                            case 'month':
                                return <Month />;
                            case 'year':
                                return <Year />;
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