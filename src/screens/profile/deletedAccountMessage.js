import React, {useState,useContext} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { PowerEyeContext } from '../../services/powerEye.context';
import { ThemeContext } from '../../services/theme.context';
export const DeletedAccountMessage = ({navigation}) => {
  const {theme} =  useContext(ThemeContext)
  const [onModalShow , setOnModalShow] = useState(true)
  const {setToken} = useContext(PowerEyeContext)
  const goLoginScreen = () =>{
    setToken("")
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
        <View style={styles(theme).centeredView}>
          <View style={styles(theme).modalView}>
            <Text style={styles(theme).modalText}>Sad to hear that you are leaving </Text>
            <Text style={styles(theme).modalText}>our family</Text>
            <Text style={styles(theme).descreption}>
              Account Deletion done successfully
            </Text>
            <View style={styles(theme).buttonsWrapper}>
            <Pressable
              style={styles(theme).deleteButton}
              onPress={() => goLoginScreen()}>
              <Text style={styles(theme).textStyle}>Ok</Text>
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
    marginTop: theme.space[3],
  },
  modalView: {
    margin: theme.space[3],
    width:'85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: theme.space[0],
    paddingTop: theme.space[7],
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
    height:theme.sizes[5],
    width:theme.sizes[5]*4,
    borderRadius: 20,

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
    backgroundColor: theme.colors.greenTransparent,
    margin:theme.space[3],
  },

  textStyle: {
    color: theme.colors.tertiary,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
  modalText: {

    fontSize:theme.sizes[3],
    fontWeight:theme.fontWeights.bold,
    textAlign: 'left',
    color:theme.colors.greenTransparent,

  },
  descreption: {
    marginTop: theme.space[7],
    marginBottom: theme.space[7],
    fontSize:theme.sizes[2],
    fontWeight:theme.fontWeights.bold,
    textAlign: 'left',
    color:theme.colors.greenTransparent
  },
  buttonsWrapper:{
    flexDirection:'row'
    
  }
}));
