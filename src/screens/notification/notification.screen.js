import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ThemeContext } from "../../services/theme.context";
export const NotificationsScreen = () => {
  const {theme} = useContext(ThemeContext)
  const [notification, setNotification] = useState([1, 2, 3, 4, 5]);
  const onDeleteNotification = (item) => {
    setNotification(
      notification.filter((id) => {
        return id !== item;
      })
    );
  };

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).header}>
        <Text style={styles(theme).headerTitle}>Notification</Text>
      </View>
      <View style={styles(theme).deleteButtonWrapper}>
        <TouchableOpacity
          style={styles(theme).deleteButton}
          onPress={() => setNotification([])}
        >
          <MaterialCommunityIcons
            name={"trash-can"}
            color={"rgba(0,0,0,0.8)"}
            size={20}
          />
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>remove all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notification}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item)}>
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
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
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
  },
  notificationWrapper:{
    height: theme.sizes[8],
    paddingRight: theme.space[1],
    margin: theme.space[0],
    borderColor: theme.colors.borderColor,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
  }
}));
