import React, { useRef, useState,useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { DeleteAccount } from "./deleteAccount";
import { LogoutModal } from "./logoutModal";
import { ThemeContext } from "../../services/theme.context";
import { PowerEyeContext } from "../../services/powerEye.context";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const ProfileScreen = ({ navigation }) => {
  const {theme} = useContext(ThemeContext)
  const {username,email,image} =  useContext(PowerEyeContext)

  const [profilePicUrl, setProfilePicUrl] = useState(
    require("../../../assets/profile.jpg")
  );
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [onModalShow , setOnModalShow] = useState(false)
  return (
  
    <View style={styles(theme).container}>
      <View style={styles(theme).Profile}>
        {image ? 
          <Image style={styles(theme).profilePicture} source={{uri :  image}} />:
          <Image style={styles(theme).profilePicture} source={require("../../../assets/profile.jpg")} />}
        <View style={styles(theme).profileInfoWrapper}>
          <Text style={styles(theme).name}>{username}</Text>
          <Text style={styles(theme).email}>{email}</Text>
        </View>
        <View style={styles(theme).Menu}>
          <TouchableOpacity
            style={styles(theme).button}
            activeOpacity={1}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <MaterialCommunityIcons
              name={"account-cog"}
              color={"rgba(0,112,124,0.8)"}
              size={35}
            />
            <Text style={styles(theme).ButtonTitle}>Edit Personal Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(theme).button} activeOpacity={1}>
            <MaterialCommunityIcons
              name={"help-box"}
              color={"rgba(0,112,124,0.8)"}
              size={35}
            />
            <Text style={styles(theme).ButtonTitle} onPress={()=>navigation.navigate('helpCenter')}>Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(theme).button} activeOpacity={1} onPress={()=>setOnModalShow(true)}>
            <AntDesign name={"logout"} color={"rgba(0,112,124,1)"} size={35} />
            <Text style={styles(theme).ButtonTitle}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles(theme).DeleteAccountButton,{backgroundColor:deleteAccount ?"rgba(0,112,124,0.4)" : 'white'}]} activeOpacity={1} onPress={()=>setDeleteAccount(true)}>
            <MaterialCommunityIcons
              name={"trash-can"}
              color={"rgba(255,0,0,0.8)"}
              size={40}
            />
            <Text style={styles(theme).DeleteAccountButtonTitle}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DeleteAccount deleteAccount = {deleteAccount} setDeleteAccount={setDeleteAccount} navigation={navigation} />
      <LogoutModal onModalShow={onModalShow} setOnModalShow={setOnModalShow} />
    </View>

  );
};
const styles = StyleSheet.create((theme)=>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.greenTransparent,
  },
  Profile: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    backgroundColor: theme.colors.background,
    bottom: 0,
    width: windowWidth * 1.16,
    height: windowHeight * 0.65,
    borderTopLeftRadius: windowHeight * windowWidth,
    borderTopRightRadius: windowHeight * windowWidth,
  },
  profilePicture: {
    borderColor: theme.colors.greenTransparent,
    height: windowWidth / 2.4,
    width: windowWidth / 2.4,
    borderRadius: windowWidth,
    borderWidth: 2,
    marginTop: -windowHeight / 12,
  },
  profileInfoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    margin: theme.space[3],
  },
  name: {
    color: theme.colors.greenTransparent,
    fontSize: theme.sizes[3],
    fontWeight: theme.fontWeights.bold,
    marginBottom: theme.space[0],
  },
  email: {
    fontSize: theme.sizes[2],
    color: "rgba(0,0,0,0.3)",
    fontWeight: theme.fontWeights.bold,
  },

  Menu: {
    flex: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.15)",
    paddingLeft: theme.space[5],
    height: windowHeight / 12,
    width: windowWidth,
    borderTopWidth: 2,
  },
  DeleteAccountButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.2)" ,
    paddingLeft: theme.space[5],
    height: windowHeight / 12,
    width: windowWidth,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  ButtonTitle: {
    color: theme.colors.primary,
    fontSize: theme.sizes[2],
    fontWeight: theme.fontWeights.bold,
    marginLeft: theme.space[3],
  },
  DeleteAccountButtonTitle: {
    color: theme.colors.error,
    fontSize: theme.sizes[2],
    fontWeight: theme.fontWeights.bold,
    marginLeft: theme.space[3],
  },
}));
