import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions , Alert} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DeleteButton from '../../../deleteButton';
import TotalCO2_ThisYearPiechart from './totalCO2_ThisYearPiechart';
import TotalCO2_LastYearPiechart from './totalCO2_LastYearPiechart';




function handleDeleteRoom() {
    // Perform API call or any other logic for deleting the room
    // You can show a success message or navigate to another screen after deletion
    Alert.alert('Room deleted!');
}

const LastYear = () => (
    <View style={{ flex: 1 }} >
  
     <TotalCO2_LastYearPiechart />
    </View>

);

const ThisYear = () => (
    <View style={{ flex: 1 }} >
        
      <TotalCO2_ThisYearPiechart /> 
        
    </View>
);

const renderScene = SceneMap({
    firstTab: LastYear,
    secondTab: ThisYear,
    
});

const renderTabBar = props => (
    <TabBar
        scrollEnabled
        {...props}
        activeColor={'#00707C'}
        inactiveColor={'#8D9BA4'}
        indicatorStyle={{ backgroundColor: '#00707C'}}
        style={{  backgroundColor: '#F0F8F9'}}
        labelStyle={{ fontSize: 14, fontFamily: 'Arial', textTransform: 'none'}} // Apply custom style to labelStyle prop


    />
);



export default function ThirdTabView_totalYearCO2({ navigation }) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'firstTab', title: 'Last Year' },
        { key: 'secondTab', title: 'This Year' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={({ route }) => {
                        switch (route.key) {
                            case 'firstTab':
                                return <LastYear />;
                            case 'secondTab':
                                return <ThisYear />;
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