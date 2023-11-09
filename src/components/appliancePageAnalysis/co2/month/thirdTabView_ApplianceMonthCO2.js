import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DeleteButton from '../../../deleteButton';
import ApplianceCO2_JANBarchart from './ApplianceCO2_JANBarchart';
import ApplianceCO2_FEBBarchart from './ApplianceCO2_FEBBarchart';
import ApplianceCO2_MARBarchart from './ApplianceCO2_MARBarchart';
import ApplianceCO2_APRBarchart from './ApplianceCO2_APRBarchart';
import ApplianceCO2_MAYBarchart from './ApplianceCO2_MAYBarchart';
import ApplianceCO2_JUNBarchart from './ApplianceCO2_JUNBarchart';
import ApplianceCO2_JULBarchart from './ApplianceCO2_JULBarchart';
import ApplianceCO2_AUGBarchart from './ApplianceCO2_AUGBarchart';
import ApplianceCO2_SEPBarchart from './ApplianceCO2_SEPBarchart';
import ApplianceCO2_OCTBarchart from './ApplianceCO2_OCTBarchart';
import ApplianceCO2_NOVBarchart from './ApplianceCO2_NOVBarchart';
import ApplianceCO2_DECBarchart from './ApplianceCO2_DECBarchart';





function handleDeleteRoom() {
    // Perform API call or any other logic for deleting the room
    // You can show a success message or navigate to another screen after deletion
    Alert.alert('Appliance deleted!');
}

const JAN = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <ApplianceCO2_JANBarchart />

            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const FEB = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <ApplianceCO2_FEBBarchart />

            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const MAR = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <ApplianceCO2_MARBarchart />
            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>

);

const APR = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCO2_APRBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const MAY = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCO2_MAYBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const JUN = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCO2_JUNBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const JUL = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCO2_JULBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const AUG = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCO2_AUGBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const SEP = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCO2_SEPBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const OCT = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCO2_OCTBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const NOV = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCO2_NOVBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const DEC = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceCO2_DECBarchart />
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



export default function ThirdTabView_ApplianceMonthCO2({ navigation }) {
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