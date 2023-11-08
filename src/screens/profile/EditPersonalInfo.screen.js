import React, { useState,useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { ThemeContext } from "../../services/theme.context";
import { PowerEyeContext } from "../../services/powerEye.context";
import * as ImagePicker from 'expo-image-picker';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const EditPersonalInfoScreen = ({ navigation }) => {

    const {theme} =  useContext(ThemeContext)
  const {image,setImage,setUsername} = useContext(PowerEyeContext)
  const [tempUsername, setTempUsername] = useState("");
  const [email, setEmail] = useState("");
  const [powerEyePassword, setPowerEyePassword] = useState("");
  const [merrosPassword, setMerrosPassword] = useState("");
  const handleUsernameChange = (text) => {
    setTempUsername(text);
    console.log(text)
  };
  const handlePasswordChange = (text) => {
    setPowerEyePassword(text);
    console.log(text)
  };
  const handleMerrosPasswordChange = (text) => {
    setMerrosPassword(text);
    console.log(text)
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const saveChanges = () =>{
    setUsername(tempUsername)
  }
  return (

    <View style={styles(theme).container}>
      <View style={styles(theme).angle}>
        <Fontisto
          name="arrow-left"
          color="#00707C"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles(theme).profilePicWrapper}>
        
        {image ? <Image source={{ uri: image }} style={styles(theme).profilePic} /> :<Image
          style={styles(theme).profilePic}
          source={require("../../../assets/profile.jpg")}
        />}
        <FontAwesome5
          style={{ marginTop: -50, marginLeft: 110 }}
          name="edit"
          color="#00707C"
          size={25}
          onPress={pickImage}
        />
      </View>
      <View style={styles(theme).inputsWrapper}>
        <View>
          <Text style={styles(theme).inputTitles}>Username :</Text>
          <TextInput
            value={tempUsername}
            onChangeText={handleUsernameChange}
            borderColor="rgba(0,0,0,0.1)"
            style={styles(theme).input}
          />
        </View>
        <Text style={styles(theme).inputTitles}>Email :</Text>
        <TextInput
          editable={false}
          value="DefaultEmail@gmail.com"
          borderColor="rgba(0,0,0,0.1)"
          style={styles(theme).inputEmail}
        />
        <Text style={styles(theme).inputTitles}>PowerEye Password :</Text>
        <TextInput
            value={powerEyePassword}
             onChangeText={handlePasswordChange}
          secureTextEntry={true}
          borderColor="rgba(0,0,0,0.1)"
          style={styles(theme).input}
        />
        <Text style={styles(theme).inputTitles}>Merros Password :</Text>
        <TextInput
                    value={merrosPassword}
                    onChangeText={handleMerrosPasswordChange}
          secureTextEntry={true}
          borderColor="rgba(0,0,0,0.1)"
          style={styles(theme).input}
        />
      </View>
      <View style={styles(theme).btnWrapper}>

      <TouchableOpacity style={styles(theme).saveButton} onPress={()=>saveChanges()}>
        <Text style={styles(theme).btnTitle}>Save Changes</Text>
      </TouchableOpacity>
      
    </View>
    </View>


  );
};
const styles = StyleSheet.create((theme)=>({
  container: {
    flex:1

  },
  angle: {
    marginTop: theme.space[7],
    marginLeft: theme.space[5],
  },
  profilePic: {
    height: theme.sizes[8]*2,
    width: theme.sizes[8]*2,
    borderWidth: 1.5,
    borderRadius: theme.sizes[8]*2,
    borderColor: theme.colors.greenTransparent,
    margin: theme.space[1],
  },
  profilePicWrapper: {
  height:"30%",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.space[1],
  },
  inputsWrapper: {

    marginLeft: theme.space[6],
  },
  input: {
    height: theme.sizes[6],
    width: "90%",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: theme.colors.tertiary,
    marginTop: theme.space[0],
    paddingLeft: theme.space[1],
  },
  inputEmail: {
    height: theme.sizes[6],
    width: "90%",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: theme.colors.borderColor,
    marginTop: theme.space[0],
    paddingLeft: theme.space[1],
    fontSize: theme.sizes[2],
    fontWeight: "bold",
  },
  inputTitles: {
    fontSize: 15,
    color: "rgba(0,112,124,1)",
    fontWeight: "bold",
    marginLeft: theme.space[1],
    marginTop: theme.space[1]*0.8,

  },
  btnWrapper: {



    alignItems: "center",
    marginTop: theme.space[2],
  },
  saveButton: {
    height: theme.sizes[6],
    width: theme.sizes[8]*2,
    backgroundColor: theme.colors.greenTransparent,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btnTitle: {
    fontSize: theme.sizes[2],
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.tertiary,
  },
}));
