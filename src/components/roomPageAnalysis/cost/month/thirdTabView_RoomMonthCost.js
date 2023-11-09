import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DeleteButton from '../../../deleteButton';
import RoomCost_JANBarchart from './RoomCost_JANBarchart';
import RoomCost_FEBBarchart from './RoomCost_FEBBarchart';
import RoomCost_MARBarchart from './RoomCost_MARBarchart';
import RoomCost_APRBarchart from './RoomCost_APRBarchart';
import RoomCost_MAYBarchart from './RoomCost_MAYBarchart';
import RoomCost_JUNBarchart from './RoomCost_JUNBarchart';
import RoomCost_JULBarchart from './RoomCost_JULBarchart';
import RoomCost_AUGBarchart from './RoomCost_AUGBarchart';
import RoomCost_SEPBarchart from './RoomCost_SEPBarchart';
import RoomCost_OCTBarchart from './RoomCost_OCTBarchart';
import RoomCost_NOVBarchart from './RoomCost_NOVBarchart';
import RoomCost_DECBarchart from './RoomCost_DECBarchart';





function handleDeleteRoom() {
    // Perform API call or any other logic for deleting the room
    // You can show a success message or navigate to another screen after deletion
    Alert.alert('Appliance deleted!');
}

const JAN = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <RoomCost_JANBarchart />

            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const FEB = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <RoomCost_FEBBarchart />

            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const MAR = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <RoomCost_MARBarchart />
            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>

);

const APR = () => (
    <ScrollView>
        <RoomCost_APRBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const MAY = () => (
    <ScrollView>
        <RoomCost_MAYBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const JUN = () => (
    <ScrollView>
        <RoomCost_JUNBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const JUL = () => (
    <ScrollView>
        <RoomCost_JULBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const AUG = () => (
    <ScrollView>
        <RoomCost_AUGBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const SEP = () => (
    <ScrollView>
        <RoomCost_SEPBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const OCT = () => (
    <ScrollView>
        <RoomCost_OCTBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const NOV = () => (
    <ScrollView>
        <RoomCost_NOVBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Room" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
);

const DEC = () => (
    <ScrollView>
        <RoomCost_DECBarchart />
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



export default function ThirdTabView_RoomMonthCost({ navigation }) {
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