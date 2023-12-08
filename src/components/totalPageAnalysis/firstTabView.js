import React, { useEffect, useState,useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet,Modal,TouchableOpacity, Text, View, ScrollView, useWindowDimensions, Button } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SecondTabView from './energyConsumption/secondTabView';
import { getTheTotalEnergyRequest,deleteRoomRequest } from '../../api/apiManager';
import { PowerEyeContext } from '../../services/powerEye.context';


const renderTabBar = props => (
    <TabBar
        {...props}
        
        activeColor={'#00707C'}
        inactiveColor={'#8D9BA4'}
        indicatorStyle={{ backgroundColor: '#00707C' }}
        style={{  backgroundColor: '#F0F8F9' }}
        labelStyle={{ fontSize: 14, fontFamily: 'Arial', textTransform: 'none'}} // Apply custom style to labelStyle prop


    />
);




export function FirstTabView() {
  const [monthlyEnergy , setMonthlyEnergy ] = useState([])
  const [monthlyRoute , setMonthlyRoute ] = useState([])
  const [yearlyEnergy , setYearlyEnergy ] = useState([])
  const [yearlyRoute , setYearlyRoute ] = useState([])
  const [weeklyEnergy , setWeeklyEnergy ] = useState([])
  const [weeklyRoute , setWeeklyRoute ] = useState([])

  const {token,setRefresh,roomModalVisible, setRoomModalVisible}  = useContext(PowerEyeContext)

const layout = useWindowDimensions();

const [index, setIndex] = React.useState(0);
const [routes] = React.useState([
    { key: 'energy', title: 'Energy Consumption' },
    { key: 'cost', title: 'Cost' },
    { key: 'co2', title: 'CO2' },
]);


    useEffect(()=>{
      if(monthlyEnergy.length == 0) {
      getTheTotalEnergyRequest(token, 'monthly').then((res)=>{
        
        setMonthlyEnergy(res)
        setMonthlyRoute(res.map((p) => { return { Key: res.indexOf(p), title: p.title } }))
      })}
      if(yearlyEnergy.length == 0) {
        getTheTotalEnergyRequest(token,'yearly').then((res)=>{
         
          setYearlyEnergy(res)
          setYearlyRoute(res.map((p) => { return { Key: res.indexOf(p), title: p.title } }))
        })}
        if(weeklyEnergy.length == 0) {
          getTheTotalEnergyRequest(token,'weekly').then((res)=>{
           
            setWeeklyEnergy(res)
            setWeeklyRoute(res.map((p) => { return { Key: res.indexOf(p), title: p.title } }))
          })}
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={({ route }) => {
                        switch (route.key) {
                            case 'energy':
                                return <SecondTabView weeklyEnergy={weeklyEnergy} weeklyRoute={weeklyRoute} monthlyRoute={monthlyRoute} monthlyEnergy={monthlyEnergy} yearlyEnergy={yearlyEnergy} yearlyRoute={yearlyRoute} type={'energy'}/>;
                            case 'cost':
                                return <SecondTabView weeklyEnergy={weeklyEnergy} weeklyRoute={weeklyRoute} monthlyRoute={monthlyRoute} monthlyEnergy={monthlyEnergy} yearlyEnergy={yearlyEnergy} yearlyRoute={yearlyRoute} type={'cost'}/>;
                            case 'co2':
                                return <SecondTabView weeklyEnergy={weeklyEnergy} weeklyRoute={weeklyRoute} monthlyRoute={monthlyRoute} monthlyEnergy={monthlyEnergy} yearlyEnergy={yearlyEnergy} yearlyRoute={yearlyRoute} type={'co2'}/>;

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
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: '#B43232',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center',
      },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 8,
        margin: 15,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#B43232',
        marginBottom: 16,
        textAlign: 'left',
        
      },
      modalMessage: {
        fontSize: 16,
        color: '#00707C',
        marginBottom: 16,
        textAlign: 'left',
        padding: 5,
      },
      modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      modalButton: {
        flex: 1,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: '#B43232',
        marginHorizontal: 8,
      },
      cancelButton: {
        backgroundColor: '#8D9BA4',
      },
      modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: 'center',
      },
});