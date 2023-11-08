import React, { useState , useContext} from "react";
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
import { ThemeContext } from "../../services/theme.context";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const HelpCenterScreen = ({ navigation }) => {
  const {theme} = useContext(ThemeContext)
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
    <View style={styles(theme).container}>
      <View style={styles(theme).angle}>
        <Fontisto
          name="arrow-left"
          color="#00707C"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles(theme).too}>
        <TouchableOpacity
          style={styles(theme).button}
          activeOpacity={1}
          onPress={() => goFAQ()}
        >
          <AntDesign name={"question"} color={"rgba(0,112,124,1)"} size={35} />
          <Text style={styles(theme).ButtonTitle}>FAQs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles(theme).button} activeOpacity={1} onPress={() =>goUserGuide() }>
          <FontAwesome5
            name={"file-pdf"}
            color={"rgba(0,112,124,0.8)"}
            size={30}
          />
          <Text
            style={styles(theme).ButtonTitle}
            
          >
            User Guides
          </Text>
        </TouchableOpacity>
        <View style={styles(theme).ContactWrapper} >
            <View style={styles(theme).IconWrapper}>
          <FontAwesome5
            name={"headset"}
            color={"rgba(0,112,124,0.8)"}
            size={30}
          />
          <Text style={styles(theme).ButtonTitle}>Contact us</Text>
          
          </View>
          <View style={{marginTop:10}}>
          
          <View style={styles(theme).emailWrapper}>
          <Text style={styles(theme).title}>Email: </Text>
          <Text style={styles(theme).text}>powereyeapp@gmail.com</Text>
          </View>
          <View style={styles(theme).phoneWrapper}>
          <Text style={styles(theme).title}>Phone: </Text>
          <Text style={styles(theme).text}>+966536176137</Text>
          </View>
          </View>
          </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create((theme)=>({
  container: {
    flex: 1,
  },
  angle: {
    marginTop: theme.space[7],
    marginLeft: theme.space[5],

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
    borderColor: theme.colors.borderColor,
    paddingLeft: theme.space[5],
    height: windowHeight / 12,
    width: windowWidth,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  ContactWrapper:{
    paddingLeft: theme.space[5],
    borderColor: theme.colors.borderColor,
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
    color: theme.colors.primary,
    fontSize: theme.sizes[2],
    fontWeight: theme.fontWeights.bold,
    marginLeft: theme.space[3],
  },
  emailWrapper:{
    paddingLeft: theme.space[5],
    flexDirection:'row'
  },
  phoneWrapper:{
    paddingLeft: theme.space[5],
    flexDirection:'row'
  },
  title: {
    color: theme.colors.primary,
    fontSize: theme.sizes[2],
    fontWeight: theme.fontWeights.bold,
    marginLeft: theme.space[3],
  },
  text:{
    color: theme.colors.greenTransparent,
    fontSize: theme.sizes[2]*0.9,
  }
}));
