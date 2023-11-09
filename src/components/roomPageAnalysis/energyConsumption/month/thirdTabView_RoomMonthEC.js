import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DeleteButton from '../../../deleteButton';
import RoomEC_JANBarchart from './RoomEC_JANBarchart';
import RoomEC_FEBBarchart from './RoomEC_FEBBarchart';
import RoomEC_MARBarchart from './RoomEC_MARBarchart';
import RoomEC_APRBarchart from './RoomEC_APRBarchart';
import RoomEC_MAYBarchart from './RoomEC_MAYBarchart';
import RoomEC_JUNBarchart from './RoomEC_JUNBarchart';
import RoomEC_JULBarchart from './RoomEC_JULBarchart';
import RoomEC_AUGBarchart from './RoomEC_AUGBarchart';
import RoomEC_SEPBarchart from './RoomEC_SEPBarchart';
import RoomEC_OCTBarchart from './RoomEC_OCTBarchart';
import RoomEC_NOVBarchart from './RoomEC_NOVBarchart';
import RoomEC_DECBarchart from './RoomEC_DECBarchart';





function handleDeleteRoom() {
    // Perform API call or any other logic for deleting the room
    // You can show a success message or navigate to another screen after deletion
    Alert.alert('Appliance deleted!');
}

const JAN = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <RoomEC_JANBarchart />

            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const FEB = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <RoomEC_FEBBarchart />

            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const MAR = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <RoomEC_MARBarchart />
            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>

);

const APR = () => (
    <ScrollView>
        <RoomEC_APRBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const MAY = () => (
    <ScrollView>
        <RoomEC_MAYBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const JUN = () => (
    <ScrollView>
        <RoomEC_JUNBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const JUL = () => (
    <ScrollView>
        <RoomEC_JULBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const AUG = () => (
    <ScrollView>
        <RoomEC_AUGBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const SEP = () => (
    <ScrollView>
        <RoomEC_SEPBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const OCT = () => (
    <ScrollView>
        <RoomEC_OCTBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const NOV = () => (
    <ScrollView>
        <RoomEC_NOVBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const DEC = () => (
    <ScrollView>
        <RoomEC_DECBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const renderScene = SceneMap({
    firstTab: JAN,
    secondTab: FEB,
    thirdTab: MAR,
    fourthTab: APR,
    fifthTab: MAY,
    sixthTab: JUN,
    seventhhTab: JUL,
    eighthTab: AUG,
    ninthTab: SEP,
    tenthTab: OCT,
    eleventhTab: NOV,
    twelvthTab: DEC,
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



export default function ThirdTabView_RoomMonthEC({ navigation }) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'firstTab', title: 'JAN' },
        { key: 'secondTab', title: 'FEB' },
        { key: 'thirdTab', title: 'MAR' },
        { key: 'fourthTab', title: 'APR' },
        { key: ' fifthTab', title: 'MAY' },
        { key: 'sixthTab', title: 'JUN' },
        { key: 'seventhhTab', title: 'JUL' },
        { key: 'eighthTab', title: 'AUG' },
        { key: ' ninthTab', title: 'SEP' },
        { key: 'tenthTab', title: 'OCT' },
        { key: 'eleventhTab', title: 'NOV' },
        { key: 'twelvthTab', title: 'DEC' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={({ route }) => {
                        switch (route.key) {
                            case 'firstTab':
                                return <JAN />;
                            case 'secondTab':
                                return <FEB />;
                            case 'thirdTab':
                                return <MAR />;
                            case 'fourthTab':
                                return <APR />;
                            case ' fifthTab':
                                return <MAY />;
                            case 'sixthTab':
                                return <JUN />;
                            case 'seventhhTab':
                                return <JUL />;
                            case 'eighthTab':
                                return <AUG />;
                            case ' ninthTab':
                                return <SEP />;
                            case 'tenthTab':
                                return <OCT />;
                            case 'eleventhTab':
                                return <NOV />;
                            case 'twelvthTab':
                                return <DEC />;
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