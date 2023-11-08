import React, {useState,useContext} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { ThemeContext } from '../../services/theme.context';
export const DeleteAccount = ({deleteAccount,setDeleteAccount,navigation}) => {
  const {theme} = useContext(ThemeContext)
  const onDeleteAccount = () =>{
    navigation.navigate("DeletedAccountMessage")
    setDeleteAccount(!deleteAccount)
  }
  return (
    <View style={styles(theme).centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteAccount}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setDeleteAccount(!deleteAccount);
        }}>
        <View style={styles(theme).centeredView}>
          <View style={styles(theme).modalView}>
            <Text style={styles(theme).modalText}>Are you sure you want to permanently delete your account ?</Text>
            <Text style={styles(theme).descreption}>
              Once you delete your account, it can't be restored. You will lose access to past data and analysis
            </Text>
            <View style={styles(theme).buttonsWrapper}>
            <Pressable
              style={styles(theme).deleteButton}
              onPress={() =>onDeleteAccount() }>
              <Text style={styles(theme).textStyle}>Delete</Text>
            </Pressable>
            <Pressable
              style={styles(theme).button}
              onPress={() => setDeleteAccount(!deleteAccount)}>
              <Text style={[styles(theme).textStyle,{color:'black'}]}>Cancle</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    
    </View>
  );
};

const styles = StyleSheet.create((theme)=>({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.space[2],
  },
  modalView: {
    margin: theme.space[2],
    backgroundColor: theme.colors.background,
    borderRadius: 20,
    padding: theme.space[2],
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
    height:theme.sizes[5],
    width:theme.sizes[5]*4,
    borderRadius: theme.space[2],

    elevation: 2,
    backgroundColor: 'gray',
    marginLeft:theme.space[1]
  },
  deleteButton: {
    justifyContent:'center',
    alignItems:'center',
    height:theme.sizes[5],
    width:theme.sizes[5]*4,
    borderRadius: 20,
    elevation: 2,
    backgroundColor:theme.colors.error,
    marginLeft:theme.space[1]
  },

  textStyle: {
    color: theme.colors.tertiary,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: theme.space[2],
    fontSize:theme.sizes[2],
    fontWeight:theme.fontWeights.bold,
    textAlign: 'left',
    color:theme.colors.error
  },
  descreption: {
    marginBottom: theme.space[7],
    fontSize:theme.sizes[3],
    fontWeight:theme.fontWeights.bold,
    textAlign: 'left',
    color:theme.colors.greenTransparent
  },
  buttonsWrapper:{
    flexDirection:'row'
    
  }
}));
