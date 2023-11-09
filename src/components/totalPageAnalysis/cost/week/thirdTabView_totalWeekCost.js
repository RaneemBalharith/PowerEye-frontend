import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions , Alert} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TotalCost_ThreeweekPiechart from './totalCost-3weekPiechart';
import TotalCost_TwoweekPiechart from './totalCost_2weekPiechart';
import TotalCost_ThisweekPiechart from './totalCost_ThisweekPiechart';
import TotalCost_LastweekPiechart from './totalCost_lastweekPiechart';




const ThreeWeeksAgo = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>

      <TotalCost_ThreeweekPiechart />
      
      </ScrollView>
   </View>
  );

const TwoWeeksAgo = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
   <TotalCost_TwoweekPiechart />
   </ScrollView>
    </View>
);

const LastWeek = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
      <TotalCost_LastweekPiechart />
      </ScrollView>
  
     
    </View>

);

const Thisweek = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
      <TotalCost_ThisweekPiechart /> 
      </ScrollView>
        
    </View>
);

const renderScene = SceneMap({
    firstTab: ThreeWeeksAgo,
    secondTab: TwoWeeksAgo,
    thirdTab: LastWeek,
    fourthTab : Thisweek,
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



export default function ThirdTabView_totalWeekCost({ navigation }) {
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