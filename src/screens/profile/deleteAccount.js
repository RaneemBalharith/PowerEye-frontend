import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

export const DeleteAccount = ({deleteAccount,setDeleteAccount,navigation}) => {
  const onDeleteAccount = () =>{
    navigation.navigate("DeletedAccountMessage")
    setDeleteAccount(!deleteAccount)
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteAccount}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setDeleteAccount(!deleteAccount);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to permanently delete your account ?</Text>
            <Text style={styles.descreption}>
              Once you delete your account, it can't be restored. You will lose access to past data and analysis
            </Text>
            <View style={styles.buttonsWrapper}>
            <Pressable
              style={styles.deleteButton}
              onPress={() =>onDeleteAccount() }>
              <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => setDeleteAccount(!deleteAccount)}>
              <Text style={[styles.textStyle,{color:'black'}]}>Cancle</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    height:30,
    width:120,
    borderRadius: 20,

    elevation: 2,
    backgroundColor: 'gray',
    marginLeft:10
  },
  deleteButton: {
    justifyContent:'center',
    alignItems:'center',
    height:30,
    width:120,
    borderRadius: 20,
    elevation: 2,
    backgroundColor: 'rgba(200,0,0,0.8)',
    marginLeft:10
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 18,
    fontSize:18,
    fontWeight:'bold',
    textAlign: 'left',
    color:'rgba(180,0,0,0.8)'
  },
  descreption: {
    marginBottom: 50,
    fontSize:15,
    fontWeight:'bold',
    textAlign: 'left',
    color:'rgba(0,112,124,0.7)'
  },
  buttonsWrapper:{
    flexDirection:'row'
    
  }
});
