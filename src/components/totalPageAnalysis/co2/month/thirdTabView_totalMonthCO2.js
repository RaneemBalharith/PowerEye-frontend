import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import DeleteButton from '../../../deleteButton';
import TotalCO2_JANPiechart from './TotalCO2_JANPiechart';
import TotalCO2_FEBPiechart from './TotalCO2_FEBPiechart';
import TotalCO2_MARPiechart from './TotalCO2_MARPiechart';
import TotalCO2_APRPiechart from './TotalCO2_APRPiechart';
import TotalCO2_MAYPiechart from './TotalCO2_MAYPiechart';
import TotalCO2_JUNPiechart from './TotalCO2_JUNPiechart';
import TotalCO2_JULPiechart from './TotalCO2_JULPiechart';
import TotalCO2_AUGPiechart from './TotalCO2_AUGPiechart';
import TotalCO2_SEPPiechart from './TotalCO2_SEPPiechart';
import TotalCO2_OCTPiechart from './TotalCO2_OCTPiechart';
import TotalCO2_NOVPiechart from './TotalCO2_NOVPiechart';
import TotalCO2_DECPiechart from './TotalCO2_DECPiechart';





function handleDeleteRoom() {
    // Perform API call or any other logic for deleting the room
    // You can show a success message or navigate to another screen after deletion
    Alert.alert('Room deleted!');
}

const JAN = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <TotalCO2_JANPiechart />
        </ScrollView>
    </View>
);

const FEB = () => (
    <View style={{ flex: 1 }} >
       <TotalCO2_FEBPiechart />
    </View>
);

const MAR = () => (
    <View style={{ flex: 1 }} >
       
       <TotalCO2_MARPiechart />

    </View>

);

const APR = () => (
    <View style={{ flex: 1 }} >

<TotalCO2_APRPiechart />

    </View>
);

const MAY = () => (
    <View style={{ flex: 1 }} >

<TotalCO2_MAYPiechart />

    </View>
);

const JUN = () => (
    <View style={{ flex: 1 }} >

<TotalCO2_JUNPiechart />

    </View>
);

const JUL = () => (
    <View style={{ flex: 1 }} >

<TotalCO2_JULPiechart />

    </View>
);

const AUG = () => (
    <View style={{ flex: 1 }} >

<TotalCO2_AUGPiechart />

    </View>
);

const SEP = () => (
    <View style={{ flex: 1 }} >

<TotalCO2_SEPPiechart />

    </View>
);

const OCT = () => (
    <View style={{ flex: 1 }} >

<TotalCO2_OCTPiechart />

    </View>
);

const NOV = () => (
    <View style={{ flex: 1 }} >

<TotalCO2_NOVPiechart />

    </View>
);

const DEC = () => (
    <View style={{ flex: 1 }} >

<TotalCO2_DECPiechart />

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



export default function ThirdTabView_totalMonthkCO2({ navigation }) {
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
                            case   ' ninthTab':
                                return <SEP />;
                            case  'tenthTab':
                                return <OCT />;
                            case  'eleventhTab':
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