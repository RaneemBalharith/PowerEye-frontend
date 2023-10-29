import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const EditPersonalInfoScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [powerEyePassword, setPowerEyePassword] = useState("");
  const [merrosPassword, setMerrosPassword] = useState("");
  const handleUsernameChange = (text) => {
    setUsername(text);
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
  return (
    <View style={styles.container}>
      <View style={styles.angle}>
        <Fontisto
          name="arrow-left"
          color="#00707C"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.profilePicWrapper}>
        <Image
          style={styles.profilePic}
          source={require("../../../assets/profile.jpg")}
        />
        <FontAwesome5
          style={{ marginTop: -50, marginLeft: 110 }}
          name="edit"
          color="#00707C"
          size={25}
        />
      </View>
      <View style={styles.inputsWrapper}>
        <View>
          <Text style={styles.inputTitles}>Username :</Text>
          <TextInput
            value={username}
            onChangeText={handleUsernameChange}
            borderColor="rgba(0,0,0,0.1)"
            style={styles.input}
          />
        </View>
        <Text style={styles.inputTitles}>Email :</Text>
        <TextInput
          editable={false}
          value="DefaultEmail@gmail.com"
          borderColor="rgba(0,0,0,0.1)"
          style={styles.inputEmail}
        />
        <Text style={styles.inputTitles}>PowerEye Password :</Text>
        <TextInput
            value={powerEyePassword}
             onChangeText={handlePasswordChange}
          secureTextEntry={true}
          borderColor="rgba(0,0,0,0.1)"
          style={styles.input}
        />
        <Text style={styles.inputTitles}>Merros Password :</Text>
        <TextInput
                    value={merrosPassword}
                    onChangeText={handleMerrosPasswordChange}
          secureTextEntry={true}
          borderColor="rgba(0,0,0,0.1)"
          style={styles.input}
        />
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.btnTitle}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  angle: {
    marginTop: 50,
    marginLeft: 30,
  },
  profilePic: {
    height: 140,
    width: 140,
    borderWidth: 1.5,
    borderRadius: 150,
    borderColor: "rgba(0,112,124,0.7)",
    margin: 10,
  },
  profilePicWrapper: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  inputsWrapper: {
    flex: 0.5,
    marginLeft: 40,
  },
  input: {
    height: 42,
    width: "90%",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 5,
    paddingLeft: 10,
  },
  inputEmail: {
    height: 42,
    width: "90%",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginTop: 5,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  inputTitles: {
    fontSize: 15,
    color: "rgba(0,112,124,1)",
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 7,
  },
  btnWrapper: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  saveButton: {
    height: 40,
    width: 150,
    backgroundColor: "rgba(0,112,124,0.7)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btnTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
