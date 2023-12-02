import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../../components/Card';
import FirstTabViewAppliance from '../../components/appliancePageAnalysis/firstTabViewAppliance';
import { FontAwesome5 } from '@expo/vector-icons';
import { PowerEyeContext } from '../../services/powerEye.context';
import { changeApplianceNameRequest,getApplianceEnergyRequest, getMostRecentReadingRequest } from '../../api/apiManager';

export const DeviceCardScreen =({navigation,route})=>{
    const {setRefresh} =  useContext(PowerEyeContext)
    const [applianceName, setApplianceName] = useState(route.params.item.name); 
    const [todayEnergy,setTodayEnergy] = useState(0)
    const [isEditing, setIsEditing] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [updatedApplianceName, setUpdatedApplainceName] = useState('');
    const [error, setError] = useState('');
    const [mostRecentReading,setMostRecentReading] = useState(0)
    const {setApplianceId,convertEnergyToCO2e,convertEnergyToCost,setGoBackNavigation,token} = useContext(PowerEyeContext)

  const handleUpdateApplianceName = () => {
      if (updatedApplianceName.length < 2) {
        setError('Name should be at least two characters');
      } else {
        changeApplianceNameRequest(token,updatedApplianceName,route.params.item.id).then((res)=>{
          setRefresh(res)
        })
        setModalVisible(false);
        setError('');
      }
    };
  
    const handleOpenModal = () => {
      setUpdatedApplainceName(''); // Clear the previous entered text
      setModalVisible(true);
    };
    useEffect(()=>{
      console.log(route.params.item.id)
      setApplianceId(route.params.item.id)
      setGoBackNavigation(navigation)
 
      getMostRecentReadingRequest(token,route.params.item.id ).then((res)=>{
        console.log('setMostRecentReading',res)
        setMostRecentReading(res['power'])
      })
      getApplianceEnergyRequest(token , route.params.item.id , 'daily').then((res)=>{
        setTodayEnergy(res)
        console.log(res)
      })
    },[])

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Ionicons name="arrow-back-outline" size={35} color="#00707C" style={styles.backArrow} onPress={() => navigation.goBack()} />
            {isEditing ? (
              <TextChangeComponent value={updatedApplianceName} onChangeText={setUpdatedApplainceName} />
            ) : (
              <>
                <Text style={styles.title}>{applianceName}</Text>
                <FontAwesome5 name="edit" size={24} color="#00707C" onPress={handleOpenModal} />
              </>
            )}
          </View>
        </View>
        <Text style={{ paddingTop: 30, paddingLeft: 30, fontSize: 18, marginRight: 5 }}>
          Current Power:
          <Text style={{ fontSize: 20, color: '#00707C', fontWeight: 'bold', alignItems: 'center' }}>{mostRecentReading&&mostRecentReading}</Text>
        </Text>
  
        <Text style={{ paddingTop: 30, paddingLeft: 30, fontSize: 18 }}>Today's Analysis:</Text>
        <View style={styles.cardView}>
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Energy </Text>
            <Text style={styles.cardContent}>{todayEnergy.toFixed(3)} KwH</Text>
          </Card>
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Cost</Text>
            <Text style={styles.cardContent}>{todayEnergy && convertEnergyToCost(todayEnergy)} SAR</Text>
          </Card>
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>CO2 </Text>
            <Text style={styles.cardContent}>{todayEnergy && convertEnergyToCO2e(todayEnergy)} kg</Text>
          </Card>
        </View>
        <View style={styles.tabContainer}>
          <FirstTabViewAppliance navigation={navigation} applianceId={route.params.item.id} />
        </View>
  
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Edit Appliance Name</Text>
  
              <TextInput
                style={[styles.modalInput, error && styles.inputError]}
                value={updatedApplianceName}
                onChangeText={setUpdatedApplainceName}
                placeholder="Enter appliance name"
              />
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
  
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity style={[styles.modalButton, styles.saveButton]} onPress={handleUpdateApplianceName}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F8F9',
    },
    header: {
      flexDirection: 'row',
      paddingTop: 70,
      paddingLeft: 10,
      justifyContent: 'space-around',
    },
    backArrow: {
      marginRight: 10,
    },
    title: {
      color: '#000000',
      fontSize: 18,
      fontWeight: 'bold',
    },
    tabContainer: {
      flex: 1,
      marginTop: 5,
      backgroundColor: '#F0F8F9',
    },
    cardView: {
      flexDirection: 'row',
      justifyContent: 'space-around',

      margin: 5,
    },
    cardTitle: {
      fontWeight: '600',
      fontSize: 14,
    },
    cardContent: {
      paddingTop: 10,
      color: '#00707C',
      fontSize: 17,
      fontWeight: 'bold',
    },
    // Modal Styles
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 20,
      width: 300,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    modalInput: {
      height: 40,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    modalButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    modalButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 5,
      marginLeft: 10,
    },
    cancelButton: {
      backgroundColor: '#CCCCCC',
    },
    saveButton: {
      backgroundColor: '#00707C',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 'bold',
    },
    inputError: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
  });