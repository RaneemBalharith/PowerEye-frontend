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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const ProfileScreen = ({ navigation }) => {

  const [profilePicUrl, setProfilePicUrl] = useState(
    require("../../../assets/profile.jpg")
  );
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [onModalShow , setOnModalShow] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.Profile}>
        <Image style={styles.profilePicture} source={profilePicUrl} />
        <View style={styles.profileInfoWrapper}>
          <Text style={styles.name}>Default Name</Text>
          <Text style={styles.email}>DefaultEmail@gmail.com</Text>
        </View>
        <View style={styles.Menu}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={1}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <MaterialCommunityIcons
              name={"account-cog"}
              color={"rgba(0,112,124,0.8)"}
              size={35}
            />
            <Text style={styles.ButtonTitle}>Edit Personal Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} activeOpacity={1}>
            <MaterialCommunityIcons
              name={"help-box"}
              color={"rgba(0,112,124,0.8)"}
              size={35}
            />
            <Text style={styles.ButtonTitle} onPress={()=>navigation.navigate('helpCenter')}>Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} activeOpacity={1} onPress={()=>setOnModalShow(true)}>
            <AntDesign name={"logout"} color={"rgba(0,112,124,1)"} size={35} />
            <Text style={styles.ButtonTitle}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.DeleteAccountButton,{backgroundColor:deleteAccount ?"rgba(0,112,124,0.4)" : 'white'}]} activeOpacity={1} onPress={()=>setDeleteAccount(true)}>
            <MaterialCommunityIcons
              name={"trash-can"}
              color={"rgba(255,0,0,0.8)"}
              size={40}
            />
            <Text style={styles.DeleteAccountButtonTitle}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DeleteAccount deleteAccount = {deleteAccount} setDeleteAccount={setDeleteAccount} navigation={navigation} />
      <LogoutModal onModalShow={onModalShow} setOnModalShow={setOnModalShow} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,112,124,0.8)",
  },
  Profile: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    width: windowWidth * 1.16,
    height: windowHeight * 0.65,
    borderTopLeftRadius: windowHeight * windowWidth,
    borderTopRightRadius: windowHeight * windowWidth,
  },
  profilePicture: {
    borderColor: "rgba(0,112,124,0.8)",
    height: windowWidth / 2.4,
    width: windowWidth / 2.4,
    borderRadius: windowWidth,
    borderWidth: 2,
    marginTop: -windowHeight / 12,
  },
  profileInfoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  name: {
    color: "rgba(0,120,124,0.7)",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 15,
    color: "rgba(0,0,0,0.3)",
    fontWeight: "bold",
  },

  Menu: {
    flex: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.15)",
    paddingLeft: 30,
    height: windowHeight / 12,
    width: windowWidth,
    borderTopWidth: 2,
  },
  DeleteAccountButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.2)" ,
    paddingLeft: 30,
    height: windowHeight / 12,
    width: windowWidth,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  ButtonTitle: {
    color: "rgba(0,120,124,1)",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
  DeleteAccountButtonTitle: {
    color: "rgba(255,0,0,0.8)",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
});
