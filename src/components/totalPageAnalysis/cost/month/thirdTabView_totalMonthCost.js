import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TotalCost_JANPiechart from './TotalCost_JANPiechart';
import TotalCost_FEBPiechart from './TotalCost_FEBPiechart';
import TotalCost_MARPiechart from './TotalCost_MARPiechart';
import TotalCost_APRPiechart from './TotalCost_APRPiechart';
import TotalCost_MAYPiechart from './TotalCost_MAYPiechart';
import TotalCost_JUNPiechart from './TotalCost_JUNPiechart';
import TotalCost_JULPiechart from './TotalCost_JULPiechart';
import TotalCost_AUGPiechart from './TotalCost_AUGPiechart';
import TotalCost_SEPPiechart from './TotalCost_SEPPiechart';
import TotalCost_OCTPiechart from './TotalCost_OCTPiechart';
import TotalCost_NOVPiechart from './TotalCost_NOVPiechart';
import TotalCost_DECPiechart from './TotalCost_DECPiechart';




const JAN = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
            <TotalCost_JANPiechart />
        </ScrollView>
    </View>
);

const FEB = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
       <TotalCost_FEBPiechart />
       </ScrollView>
    </View>
);

const MAR = () => (
    <View style={{ flex: 1 }} >
       <ScrollView>
       <TotalCost_MARPiechart />
       </ScrollView>

    </View>

);

const APR = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>

<TotalCost_APRPiechart />
</ScrollView>

    </View>
);

const MAY = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>

<TotalCost_MAYPiechart />
</ScrollView>

    </View>
);

const JUN = () => (
    <View style={{ flex: 1 }} >
<ScrollView>
<TotalCost_JUNPiechart />
</ScrollView>
    </View>
);

const JUL = () => (
    <View style={{ flex: 1 }} >
<ScrollView>
<TotalCost_JULPiechart />
</ScrollView>
    </View>
);

const AUG = () => (
    <View style={{ flex: 1 }} >
<ScrollView>
<TotalCost_AUGPiechart />
</ScrollView>

    </View>
);

const SEP = () => (
    <View style={{ flex: 1 }} >
<ScrollView>
<TotalCost_SEPPiechart />
</ScrollView>
    </View>
);

const OCT = () => (
    <View style={{ flex: 1 }} >
<ScrollView>
<TotalCost_OCTPiechart />
</ScrollView>
    </View>
);

const NOV = () => (
    <View style={{ flex: 1 }} >
<ScrollView>
<TotalCost_NOVPiechart />
</ScrollView>
    </View>
);

const DEC = () => (
    <View style={{ flex: 1 }} >
<ScrollView>
<TotalCost_DECPiechart />
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