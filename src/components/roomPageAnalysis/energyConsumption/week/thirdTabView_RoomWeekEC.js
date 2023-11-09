import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DeleteButton from '../../../deleteButton';
import RoomEC_3WeekBarchart from './RoomEC_3WeekBarchart';
import RoomEC_2WeekBarchart from './RoomEC_2WeekBarchart';
import RoomEC_ThisWeekBarchart from './RoomEC_ThisWeekBarchart';
import RoomEC_LastWeekBarchart from './RoomEC_LastWeekBarchart';





function handleDeleteRoom() {
    // Perform API call or any other logic for deleting the room
    // You can show a success message or navigate to another screen after deletion
    Alert.alert('Appliance deleted!');
}

const ThreeWeeksAgo = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <RoomEC_3WeekBarchart />

            <View style={{ marginTop: 20, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const TwoWeeksAgo = () => (

    <View style={{ flex: 1 }} >
        <ScrollView>
            <RoomEC_2WeekBarchart />
            <View style={{ marginTop: 20, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const LastWeek = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <RoomEC_ThisWeekBarchart />
            <View style={{ marginTop: 20, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>


    </View>

);

const Thisweek = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <RoomEC_LastWeekBarchart />
            <View style={{ marginTop: 20, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const renderScene = SceneMap({
    firstTab: ThreeWeeksAgo,
    secondTab: TwoWeeksAgo,
    thirdTab: LastWeek,
    fourthTab: Thisweek,
});

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



export default function ThirdTabView_RoomWeekEC({ navigation }) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'firstTab', title: 'Three Weeks Ago' },
        { key: 'secondTab', title: 'Two Weeks Ago' },
        { key: 'thirdTab', title: 'Last Week' },
        { key: 'fourthTab', title: 'This Week' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={({ route }) => {
                        switch (route.key) {
                            case 'firstTab':
                                return <ThreeWeeksAgo />;
                            case 'secondTab':
                                return <TwoWeeksAgo />;
                            case 'thirdTab':
                                return <LastWeek />;
                            case 'fourthTab':
                                return <Thisweek />;
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