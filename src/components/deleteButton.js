import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function DeleteButton({ text, roomName, onDelete }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDelete = () => {
    // Call API for deleting the room
    onDelete();
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.button}>
          <MaterialIcons name="delete" size={18} color="#fff" style={{paddingRight: 10}} />
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Are you sure you want to permanently delete {roomName}?</Text>
            <Text style={styles.modalMessage}>
              Once you delete this room, it can't be restored. You will lose access to past data and analysis.
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={handleDelete}>
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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