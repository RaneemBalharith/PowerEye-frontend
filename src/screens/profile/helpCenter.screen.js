import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  Linking
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const HelpCenterScreen = ({ navigation }) => {
  const goUserGuide = () =>{
    if(Platform.OS == "ios"){
      navigation.navigate("userGuide")
    }else{
      Linking.openURL('https://drive.google.com/file/d/1JHDjfokQsjU9hu4dKzni92s6PxXlAGaG/view?usp=drivesdk')
    }
  }
  const goFAQ = () =>{
    if(Platform.OS == "ios"){
      navigation.navigate("FaqScreen")
    }else{
      Linking.openURL('https://drive.google.com/file/d/10I0adfF818RKMYE6b2lMWgZceIKW27Gm/view?usp=drivesdk')
    }
  }
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
      <View style={styles.too}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={1}
          onPress={() => goFAQ()}
        >
          <AntDesign name={"question"} color={"rgba(0,112,124,1)"} size={35} />
          <Text style={styles.ButtonTitle}>FAQs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() =>goUserGuide() }>
          <FontAwesome5
            name={"file-pdf"}
            color={"rgba(0,112,124,0.8)"}
            size={30}
          />
          <Text
            style={styles.ButtonTitle}
            
          >
            User Guides
          </Text>
        </TouchableOpacity>
        <View style={styles.ContactWrapper} >
            <View style={styles.IconWrapper}>
          <FontAwesome5
            name={"headset"}
            color={"rgba(0,112,124,0.8)"}
            size={30}
          />
          <Text style={styles.ButtonTitle}>Contact us</Text>
          
          </View>
          <View style={{marginTop:10}}>
          
          <View style={styles.emailWrapper}>
          <Text style={styles.title}>Email: </Text>
          <Text style={styles.text}>powereyeapp@gmail.com</Text>
          </View>
          <View style={styles.phoneWrapper}>
          <Text style={styles.title}>Phone: </Text>
          <Text style={styles.text}>+966536176137</Text>
          </View>
          </View>
          </View>
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

    flex: 0.15,
  },
  tools: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.15)",
    paddingLeft: 30,
    height: windowHeight / 12,
    width: windowWidth,
    borderTopWidth: 2,
    borderBottomWidth: 1,
  },
  ContactWrapper:{
    paddingLeft: 30,
    borderColor: "rgba(0,0,0,0.15)",
    justifyContent: "center",
    height: windowHeight / 8,
    width: windowWidth,

    borderBottomWidth: 2,
  },
  IconWrapper:{
    
    alignItems: "center",
    flexDirection:'row',
  },
  ButtonTitle: {
    color: "rgba(0,120,124,1)",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
  emailWrapper:{
    paddingLeft: 30,
    flexDirection:'row'
  },
  phoneWrapper:{
    paddingLeft: 30,
    flexDirection:'row'
  },
  title: {
    color: "rgba(0,120,124,1)",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 20,
  },
  text:{
    color: "rgba(0,120,124,0.7)",
    fontSize: 14,
  }
});
