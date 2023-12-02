import React, { useCallback, useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity, Dimensions, Image , FlatList, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../../components/Card';
import FirstTabViewRoom from '../../components/roomPageAnalysis/firstTabViewRoom';
import { FontAwesome5 } from '@expo/vector-icons';
import ScrollableCard from '../../components/scrollableCard';
import AddApplianceButton from '../../components/addApplianceButton';
import { addApplianceToRoomRequest,getRoomEnergyRequest,updateRoomNameRequest, deleteApplianceFromRoomRequest, getRoomAppliancesRequest } from '../../api/apiManager';
import { PowerEyeContext } from '../../services/powerEye.context';
import { DeviceCardSwiper } from './deviceCardsSwiper';
import AddNewRoom from '../../components/AddNewRoom';
export const Room = ({navigation,route}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  console.log("roomroute",route.params.room.id)
  const {token,appliance_ids,convertEnergyToCO2e,convertEnergyToCost,setAppliance_ids,rooms,refresh,roomAppliances, setRoomAppliances,setRefresh} = useContext(PowerEyeContext)
  const [roomName, setRoomName] = useState('Room'); // Set an initial room name
  const [appliances ,setAppliances]= useState([]);
  const [roomEnergy , setRoomEnergy]= useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedRoomName, setUpdatedRoomName] = useState('');
  const [error, setError] = useState('');
  const handleUpdateRoomName = () => {
    if (updatedRoomName.length < 2) {
      setError('Name should be at least two characters');
    } else {
      updateRoomNameRequest(token , route.params.room.id ,updatedRoomName ).then((res)=>{
        console.log('room name changed',updatedRoomName)
        setRefresh('room name refresh')
      })

      setModalVisible(false);
      setError('');
    }
  };

  const handleOpenModal = () => {
    setUpdatedRoomName(''); // Clear the previous entered text
    setModalVisible(true);
  };

const onRemoveApplianceFromRoom =(appliance_id)=>{
  console.log('this is deleting  appliance from room',route.params.room.id , 'appliance' ,appliance_id)
  deleteApplianceFromRoomRequest(token,route.params.room.id,appliance_id ).then((res)=>{
    console.log('this is deleting  appliance from room',res)
    setRefresh('this is deleting  appliance from room')
  })
}
const handleOnAddAplianceToThisRoom = () => {
  setShowAddModal(false);
  addApplianceToRoomRequest(token,route.params.room.id,appliance_ids).then((res)=>{
    setAppliance_ids([])
    console.log('this is adding new appliance to room',res)
    setRefresh('this is adding new appliance to room')
  })

};

const handleCloseModal = () => {
  setShowAddModal(false);

};

useEffect(()=>{
  getRoomAppliancesRequest(token,route.params.room.id).then((res)=>{
    setRoomAppliances(res["appliances"])
    
  })
  getRoomEnergyRequest(token ,route.params.room.id ,'daily' ).then((res)=>{
    if(res){
    setRoomEnergy(res)
  }else{
    setRoomEnergy(0)
  }
  })
},[route])
useEffect(()=>{
  getRoomAppliancesRequest(token,route.params.room.id).then((res)=>{
    setAppliances(res["appliances"])
    console.log('this is the added appliances:',res["appliances"])
  })
},[refresh])
  return (
    <View style={styles.container}>
      <View>
      <Modal visible={showAddModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <AddNewRoom onAdd={handleOnAddAplianceToThisRoom} onCancel={handleCloseModal} />
            <View style={styles.modalButtonsContainer}>
            <TouchableOpacity style={[styles.modalButton, styles.nextButton]} onPress={handleOnAddAplianceToThisRoom}>
                <Text style={styles.nextButtonText}>add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
        <View style={styles.header}>
          <Ionicons name="arrow-back-outline" size={35} color="#00707C" style={styles.backArrow} onPress={() => navigation.goBack()} />
          {isEditing ? (
            <TextChangeComponent value={updatedRoomName} onChangeText={setUpdatedRoomName} />
          ) : (
            <>
              <Text style={styles.title}>{route.params.room.name}</Text>
              <FontAwesome5 name="edit" size={24} color="#00707C" onPress={handleOpenModal} />
            </>
          )}
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <View style={{height:150,flex:1}}>
        <Text style={{ paddingTop: 20, paddingLeft: 30, fontSize: 18 }}>Room Devices:  </Text>
            
          <DeviceCardSwiper devices={appliances} onRemoveApplianceFromRoom={onRemoveApplianceFromRoom} />

        </View>
        <View>
        <AddApplianceButton onPress={()=>setShowAddModal(true)} />
          </View>
        
      </View>
      <View>
      
        </View>   
   
      <Text style={{ paddingTop: 10, paddingLeft: 30, fontSize: 18 }}>Today's Analysis:</Text>
      <View style={styles.cardView}>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Energy </Text>
          <Text style={styles.cardContent}>{roomEnergy.toFixed(3)} KwH</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Cost</Text>
          <Text style={styles.cardContent}>{convertEnergyToCost(roomEnergy)} SAR</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>CO2 </Text>
          <Text style={styles.cardContent}>{convertEnergyToCO2e(roomEnergy) } kg</Text>
        </Card>
      </View>
      <View style={styles.tabContainer}>

  <FirstTabViewRoom navigation={navigation} roomid={route.params.room.id} roomName={route.params.room.name}/> 
      </View>


      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Room Name</Text>

            <TextInput
              style={[styles.modalInput, error && styles.inputError]}
              value={updatedRoomName}
              onChangeText={setUpdatedRoomName}
              placeholder="Enter room name"
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={[styles.modalButton, styles.saveButton]} onPress={handleUpdateRoomName}>
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
    paddingTop: 40,
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
    marginTop: 10,
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
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',  // Align items to the center vertically
    borderRadius: 50,
    paddingVertical: 1,
    paddingHorizontal: 9,
    backgroundColor: '#45A8AE',
    marginRight: 30,
    marginTop: 30,
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
    elevation: Platform.OS === 'android' ? 6 : 0,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
   
  },
  buttonIcon: {
    marginRight: 3,  // Add some spacing between the icon and text
  },
  addButtonText: {
    color: '#1F3334',
    fontWeight: 'bold',
    fontSize: 14,
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

//Modal 2
    
  modalContainer2: {
    flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent2:{
    width: 360,
    height: 540,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
  },
  modalTitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  choicesContainer2: {
    flexDirection: 'row',
   flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  choiceItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    margin: 5,
    borderRadius: 5,
  },
  selectedChoiceItem2: {
    backgroundColor: 'lightblue',
  },
  choiceIcon2: {
    fontSize: 16,
    marginRight: 10,
  },
  choiceName2: {
    fontSize: 16,
  },
  addButton2: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignContent:'center',
    borderRadius: 20,
    padding: 3,
    backgroundColor: '#B43232',
    width: 90,
    height: 30,
  },
  addButtonText2: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
    alignItems:'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  cancelButton2: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#B43232',
    width: 100,
    },
    cancelButtonText2: {
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
     width: 360,
     height: 540,
     backgroundColor: 'white',
     borderRadius: 10,
     elevation: 5,
     padding: 20,
   },
   modalHeader: {
     fontSize: 26,
     fontWeight: 'bold',
     marginTop: 20,
     marginLeft: 12,
     marginBottom: 15,
     color: "#00707C",
   },
   modalSubheader: {
     fontSize: 18,
     marginBottom: 40,
     marginLeft: 12,
     color: "#45A8AE",
   },
   input: {
     width: '100%',
     height: 40,
     borderWidth: 1,
     borderColor: 'lightgray',
     borderRadius: 10,
     paddingHorizontal: 10,
     marginBottom: 300,
   },
   modalButtonsContainer: {
     flexDirection: 'row',
     justifyContent: 'flex-end',
     marginTop: 20,
   },
   modalButton: {
     marginLeft: 10,
     padding: 3,
     backgroundColor: 'lightgray',
     borderRadius: 16,
     width: 90,
     height: 30,
     alignItems: 'center',
     justifyContent: 'center',
     borderColor: 'gray',
     borderWidth: 1,
   },
   modalButtonText: {
     color: 'black',
     fontWeight: 'bold',
     alignItems: 'center',
     justifyContent: 'center',
   },
   nextButton: {
     backgroundColor: "#00707C",
   },
});

