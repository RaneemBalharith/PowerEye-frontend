import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity, Dimensions, Image , FlatList, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import FirstTabViewRoom from '../components/roomPageAnalysis/firstTabViewRoom';
import { FontAwesome5 } from '@expo/vector-icons';
import ScrollableCard from '../components/scrollableCard';
import AddApplianceButton from '../components/addApplianceButton';

const RoomPage = ({navigation}) => {
  const [roomName, setRoomName] = useState('Room'); // Set an initial room name
  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedRoomName, setUpdatedRoomName] = useState('');
  const [error, setError] = useState('');

  const handleUpdateRoomName = () => {
    if (updatedRoomName.length < 2) {
      setError('Name should be at least two characters');
    } else {
      setRoomName(updatedRoomName);
      setModalVisible(false);
      setError('');
    }
  };

  const handleOpenModal = () => {
    setUpdatedRoomName(''); // Clear the previous entered text
    setModalVisible(true);
  };





  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Ionicons name="arrow-back-outline" size={35} color="#00707C" style={styles.backArrow} onPress={() => navigation.navigate('Home')} />
          {isEditing ? (
            <TextChangeComponent value={updatedRoomName} onChangeText={setUpdatedRoomName} />
          ) : (
            <>
              <Text style={styles.title}>{roomName}</Text>
              <FontAwesome5 name="edit" size={24} color="#00707C" onPress={handleOpenModal} />
            </>
          )}
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <View>
        <Text style={{ paddingTop: 30, paddingLeft: 30, fontSize: 18 }}>Room Devices:  </Text>
        </View>
        <View>
        <AddApplianceButton />
          </View>
        
      </View>
      <View>
      
        </View>   
   
      <Text style={{ paddingTop: 30, paddingLeft: 30, fontSize: 18 }}>Today's Analysis:</Text>
      <View style={styles.cardView}>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Energy </Text>
          <Text style={styles.cardContent}>35 KwH</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Cost</Text>
          <Text style={styles.cardContent}>405.2 SAR</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>CO2 </Text>
          <Text style={styles.cardContent}>33.4 kg</Text>
        </Card>
      </View>
      <View style={styles.tabContainer}>
        <FirstTabViewRoom />
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
    marginTop: 30,
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
});

export default RoomPage;