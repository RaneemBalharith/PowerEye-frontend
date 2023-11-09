import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DeleteButton from '../../../deleteButton';
import ApplianceCost_JANBarchart from './ApplianceCost_JANBarchart';
import ApplianceCost_FEBBarchart from './ApplianceCost_FEBBarchart';
import ApplianceCost_MARBarchart from './ApplianceCost_MARBarchart';
import ApplianceCost_APRBarchart from './ApplianceCost_APRBarchart';
import ApplianceCost_MAYBarchart from './ApplianceCost_MAYBarchart';
import ApplianceCost_JUNBarchart from './ApplianceCost_JUNBarchart';
import ApplianceCost_JULBarchart from './ApplianceCost_JULBarchart';
import ApplianceCost_AUGBarchart from './ApplianceCost_AUGBarchart';
import ApplianceCost_SEPBarchart from './ApplianceCost_SEPBarchart';
import ApplianceCost_OCTBarchart from './ApplianceCost_OCTBarchart';
import ApplianceCost_NOVBarchart from './ApplianceCost_NOVBarchart';
import ApplianceCost_DECBarchart from './ApplianceCost_DECBarchart';





function handleDeleteRoom() {
    // Perform API call or any other logic for deleting the room
    // You can show a success message or navigate to another screen after deletion
    Alert.alert('Appliance deleted!');
}

const JAN = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <ApplianceCost_JANBarchart />

            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const FEB = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <ApplianceCost_FEBBarchart />

            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const MAR = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <ApplianceCost_MARBarchart />
            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>

);

const APR = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCost_APRBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const MAY = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCost_MAYBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const JUN = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCost_JUNBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const JUL = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCost_JULBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const AUG = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCost_AUGBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const SEP = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCost_SEPBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const OCT = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCost_OCTBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const NOV = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCost_NOVBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const DEC = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCost_DECBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
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



export default function ThirdTabView_ApplianceMonthCost({ navigation }) {
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