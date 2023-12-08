import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ThemeContext } from "../../services/theme.context";
import { PowerEyeContext } from "../../services/powerEye.context";




export const NotificationsScreen = ({navigation}) => {

  const {theme} = useContext(ThemeContext)

const {token,allNotifications, setAllNotifications} = useContext(PowerEyeContext)
console.log('this is allNotifications',allNotifications)
const [notifications,setNotifications] = useState([{title:'Update Your Password',body:'u should do',id:1}])
  const onDeleteNotification = (item) => {
    setAllNotifications(
      allNotifications.filter((id) => {
        return id !== item;
      })
    );
  };
const handleNavigation = (title) =>{
  if('Update Your Password' === title){
    navigation.navigate('editprofile')
  }else{
    navigation.navigate('Home')
  }

}
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).header}>
        <Text style={styles(theme).headerTitle}>Notification</Text>
      </View>
      <View style={styles(theme).deleteButtonWrapper}>
        <TouchableOpacity
          style={styles(theme).deleteButton}
          onPress={() => setAllNotifications([])}
        >
          <MaterialCommunityIcons
            name={"trash-can"}
            color={"rgba(0,0,0,0.8)"}
            size={20}
          />
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>remove all</Text>
        </TouchableOpacity>
      </View>
      {allNotifications &&
      <FlatList
        data={allNotifications}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNavigation(item.title)}>
            <View
              style={styles(theme).notificationWrapper}
            >
              <TouchableOpacity
                style={{ flexDirection: "row", alignSelf: "flex-end" }}
                onPress={() => onDeleteNotification(item)}
              >
                <View style={{}}>
                  <Text
                    style={{
                      color: "rgba(0,112,124,0.7)",
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                  >
                    x
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{}}>
                <Text
                  style={{
                    color: "rgba(0,112,124,0.7)",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {item?.title}
                </Text>
                <Text
                  style={{
                    color: "rgba(0,112,124,0.7)",
                    fontSize: 13,
                    fontWeight: "bold",
                    
                  }}
                  keyExtractor
                >
                  {item?.body}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />}
    </View>
  );
};
const styles = StyleSheet.create((theme)=>({
  container: {
    flex: 1,
  },
  header: {
    marginTop: theme.space[7],
    paddingLeft: theme.space[5],
    paddingBottom: theme.space[3],
    borderBottomWidth: 2,
    borderColor: theme.colors.blackTransparent,
  },
  headerTitle: {
    color: theme.colors.greenTransparent,
    fontSize: theme.sizes[4]*0.9,
    fontWeight: theme.fontWeights.bold,
  },
  deleteButtonWrapper: {
    flexDirection: "row",
    alignSelf: "flex-end",
    margin: theme.space[0],
  },
  deleteButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.greenTransparent,
    borderRadius: 15,
    padding: theme.space[0],
    width: theme.sizes[9],
    marginTop: 20,
    right: Dimensions.get('window').width * 0.05,

  },
  notificationWrapper:{
    paddingBottom:15,
    paddingRight: theme.space[1],
    margin: theme.space[0],
    borderColor: theme.colors.borderColor,
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft:20,
  }
}));
