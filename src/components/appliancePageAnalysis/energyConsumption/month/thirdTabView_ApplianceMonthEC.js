import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DeleteButton from '../../../deleteButton';
import ApplianceEC_JANBarchart from './ApplianceEC_JANBarchart';
import ApplianceEC_FEBBarchart from './ApplianceEC_FEBBarchart';
import ApplianceEC_MARBarchart from './ApplianceEC_MARBarchart';
import ApplianceEC_APRBarchart from './ApplianceEC_APRBarchart';
import ApplianceEC_MAYBarchart from './ApplianceEC_MAYBarchart';
import ApplianceEC_JUNBarchart from './ApplianceEC_JUNBarchart';
import ApplianceEC_JULBarchart from './ApplianceEC_JULBarchart';
import ApplianceEC_AUGBarchart from './ApplianceEC_AUGBarchart';
import ApplianceEC_SEPBarchart from './ApplianceEC_SEPBarchart';
import ApplianceEC_OCTBarchart from './ApplianceEC_OCTBarchart';
import ApplianceEC_NOVBarchart from './ApplianceEC_NOVBarchart';
import ApplianceEC_DECBarchart from './ApplianceEC_DECBarchart';





function handleDeleteRoom() {
    // Perform API call or any other logic for deleting the room
    // You can show a success message or navigate to another screen after deletion
    Alert.alert('Appliance deleted!');
}

const JAN = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <ApplianceEC_JANBarchart />

            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const FEB = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <ApplianceEC_FEBBarchart />

            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>
);

const MAR = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <ApplianceEC_MARBarchart />
            <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

                <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
            </View>
        </ScrollView>
    </View>

);

const APR = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceEC_APRBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const MAY = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceEC_MAYBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const JUN = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceEC_JUNBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const JUL = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceEC_JULBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const AUG = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceEC_AUGBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const SEP = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceEC_SEPBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const OCT = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceEC_OCTBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const NOV = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceEC_NOVBarchart />
        <View style={{ marginTop: 80, marginBottom: 60, marginLeft: 100, marginRight: 100 }}>

            <DeleteButton text="Delete Appliance" roomName="Example Room" onDelete={handleDeleteRoom} />
        </View>
    </ScrollView>
    </View>
);

const DEC = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>
        <ApplianceEC_DECBarchart />
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



export default function ThirdTabView_ApplianceMonthEC({ navigation }) {
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