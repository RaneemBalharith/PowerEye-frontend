import React, {useState,useContext} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { PowerEyeContext } from '../../services/powerEye.context';
export const DeletedAccountMessage = ({navigation}) => {
  const [onModalShow , setOnModalShow] = useState(true)
  const {loggedIn,setLoggedIn} = useContext(PowerEyeContext)
  const goLoginScreen = () =>{
    setLoggedIn(false)
    setOnModalShow(!onModalShow)
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={onModalShow}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setOnModalShow(!onModalShow);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Sad to hear that you are leaving </Text>
            <Text style={styles.modalText}>our family</Text>
            <Text style={styles.descreption}>
              Account Deletion done successfully
            </Text>
            <View style={styles.buttonsWrapper}>
            <Pressable
              style={styles.deleteButton}
              onPress={() => goLoginScreen()}>
              <Text style={styles.textStyle}>Ok</Text>
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
    width:'85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'rgba(0,112,124,0.7)',
    margin:20,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {

    fontSize:20,
    fontWeight:'bold',
    textAlign: 'left',
    color:'rgba(0,112,124,1)',

  },
  descreption: {
    marginTop: 50,
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
