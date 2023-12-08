import React, { useEffect, useState,useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet,Modal,TouchableOpacity, Text, View, ScrollView, useWindowDimensions, Button } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SecondTabView from './energyConsumption/secondTabView';
import { getRoomEnergyRequest,deleteRoomRequest } from '../../api/apiManager';
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




export default function FirstTabViewRoom({roomName,navigation,roomid}) {
  const [monthlyEnergy , setMonthlyEnergy ] = useState([])
  const [monthlyRoute , setMonthlyRoute ] = useState([])
  const [yearlyEnergy , setYearlyEnergy ] = useState([])
  const [yearlyRoute , setYearlyRoute ] = useState([])
  const [weeklyEnergy , setWeeklyEnergy ] = useState([])
  const [weeklyRoute , setWeeklyRoute ] = useState([])

  const {token,setRefresh,roomModalVisible, setRoomModalVisible}  = useContext(PowerEyeContext)
  const handleDelete = () => {
    deleteRoomRequest(token,roomid).then((res)=>{
        setRefresh(res)
      })
      navigation.goBack()
    setRoomModalVisible(false);
    setRefresh(true)
  };
  const DeleteModal =({roomModalVisible, setRoomModalVisible})=>{
    return(
        <Modal visible={roomModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Are you sure you want to permanently delete {roomName}?</Text>
        <Text style={styles.modalMessage}>
          Once you delete this room, it can't be restored. You will lose access to past data and analysis.
        </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={{
    backgroundColor: '#B43232',
    padding:10,
    borderRadius:10,
    height:40,
    width:100,
    marginHorizontal: 8,
  }} onPress={handleDelete}>
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{        backgroundColor:'rgba(0,0,0,0.5)',
                padding:10,
                borderRadius:10,
                height:40,
                width:100,
                marginHorizontal: 8,}}
                onPress={() => setRoomModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
}
const layout = useWindowDimensions();

const [index, setIndex] = React.useState(0);
const [routes] = React.useState([
    { key: 'energy', title: 'Energy Consumption' },
    { key: 'cost', title: 'Cost' },
    { key: 'co2', title: 'CO2' },
]);


    useEffect(()=>{
      if(monthlyEnergy.length == 0) {
      getRoomEnergyRequest(token ,roomid ,'monthly' ).then((res)=>{
        
        setMonthlyEnergy(res['monthly_energy_data'])
        setMonthlyRoute(res['monthly_energy_data'].map((p) => { return { Key: res['monthly_energy_data'].indexOf(p), title: p.title } }))
      })}
      if(yearlyEnergy.length == 0) {
        getRoomEnergyRequest(token ,roomid ,'yearly' ).then((res)=>{
         
          setYearlyEnergy(res['yearly_energy_data'])
          setYearlyRoute(res['yearly_energy_data'].map((p) => { return { Key: res['yearly_energy_data'].indexOf(p), title: p.title } }))
        })}
        if(weeklyEnergy.length == 0) {
          getRoomEnergyRequest(token ,roomid ,'weekly' ).then((res)=>{
           
            setWeeklyEnergy(res['weekly_energy_data'])
            setWeeklyRoute(res['weekly_energy_data'].map((p) => { return { Key: res['weekly_energy_data'].indexOf(p), title: p.title } }))
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
            <DeleteModal roomModalVisible={roomModalVisible} setRoomModalVisible={setRoomModalVisible}  />
           
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