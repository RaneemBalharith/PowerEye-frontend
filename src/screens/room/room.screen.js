import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, Text,FlatList, StyleSheet, ScrollView, Dimensions, Modal, TextInput } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AddNewRoom from '../../components/AddNewRoom';
import MyRoomComponent from '../../components/MyRoomComponent';
import { PowerEyeContext } from '../../services/powerEye.context';

import { addNewRoomRequest } from '../../api/apiManager';

export const RoomScreen  = ({navigation}) => {
  const [components, setComponents] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [roomName, setRoomName] = useState('');
  const {token,appliance_ids,setAppliance_ids,rooms,setRefresh} = useContext(PowerEyeContext)

  const handleAddComponent = () => {
    setShowAddModal(true);
  };

  const handleAddNewRoom = () => {
    setShowAddModal(false);
    setShowNameModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setShowNameModal(false);
  };

  const handleNameNext = () => {
    setShowNameModal(false);
  console.log(appliance_ids)
    addNewRoomRequest(token,appliance_ids,roomName ).then((res)=>{
      setAppliance_ids([])
    })
    setRefresh('redresh the rooms')
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Rooms</Text>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddComponent}>
        <MaterialCommunityIcons name="plus" size={20} color="rgba(0, 0, 0, 0.5)" />
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
      data={rooms?rooms:[]}
      renderItem={({item})=>{
        return(
        <MyRoomComponent
            number={components.length + 1}
            key={components.length}
            roomName={item.name}
            roomid={item.id}
            room={item}
            navigation={navigation}
            
          />)
      }}
      keyExtractor={(item) => item.id}
    />



      <Modal visible={showAddModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <AddNewRoom onAdd={handleAddNewRoom} onCancel={handleCloseModal} />
            <View style={styles.modalButtonsContainer}>
            <TouchableOpacity style={[styles.modalButton, styles.nextButton]} onPress={handleAddNewRoom}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={showNameModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>New Room</Text>
            <Text style={styles.modalSubheader}>2 - Name your room</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter room name"
              value={roomName}
              onChangeText={setRoomName}
            />
            <View style={styles.modalButtonsContainer}>
            <TouchableOpacity style={[styles.modalButton, styles.nextButton]} onPress={handleNameNext}>
                <Text style={styles.nextButtonText}>Create</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
             
            </View>
          </View>
        </View>
      </Modal>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 120,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
  },
  headerText: {
    marginTop: 20,
    marginBottom: 10,
    marginRight: 270,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00707C',
  },
  addButton: {
    position: 'relative',
    left: 150,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00707C',
  },
  addButtonText: {
    color: 'black',
    marginLeft: 5,
  },
  scrollContainer: {
    alignItems: 'center',
    marginTop: 0,
    width: Dimensions.get('window').width * 0.99,
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
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
