import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, ScrollView, useWindowDimensions , Alert} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TotalEC_ThreeweekPiechart from './totalEC-3weekPiechart';
import TotalEC_TwoweekPiechart from './totalEC_2weekPiechart';
import TotalEC_ThisweekPiechart from './totalEC_ThisweekPiechart';
import TotalEC_LastweekPiechart from './totalEC_lastweekPiechart';






const ThreeWeeksAgo = () => (
    <View style={{ flex: 1 }} >
    <ScrollView>

      <TotalEC_ThreeweekPiechart />
     
      </ScrollView>
   </View>
  );

const TwoWeeksAgo = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
   <TotalEC_TwoweekPiechart />
   </ScrollView>
    </View>
);

const LastWeek = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
      <TotalEC_LastweekPiechart />
      </ScrollView>
  
     
    </View>

);

const Thisweek = () => (
    <View style={{ flex: 1 }} >
        <ScrollView>
      <TotalEC_ThisweekPiechart /> 
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



export default function ThirdTabView_totalWeekEC({ navigation }) {
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