import React, { useContext,useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ThemeContext } from "../../services/theme.context";
import { RetrievePlugsError } from "./unableToRetrievePlugs";
import { PowerEyeContext } from "../../services/powerEye.context";
export const AddDevice = ({ onAddDevice, setOnAddDevice }) => {
  const { theme } = useContext(ThemeContext);
  const {smartPlugs,showError,setShowError} = useContext(PowerEyeContext)

  const handleOnAdd = ()=>{
    if(smartPlugs?.length){
      setOnAddDevice(true)
    }else{
      setShowError(true)
    }

  }
  return (
    <View style={styles(theme).container}>
            
      <Text style={styles(theme).Title}>Linked Devices ...</Text>
       <RetrievePlugsError showError={showError} setShowError={setShowError}/>
      <TouchableOpacity
        style={styles(theme).button}
        onPress={() => handleOnAdd()}
      >
        <MaterialCommunityIcons
          name={"plus"}
          color={"rgba(0,0,0,0.5)"}
          size={20}
        />
        <Text style={styles(theme).buttonText}>Add</Text>
        
      </TouchableOpacity>

    </View>
  );
};
const styles = StyleSheet.create((theme) => ({
  container: {
    marginTop: theme.space[2],
    flexDirection: "row",
    height: theme.sizes[8],
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: theme.sizes[4],
    width: theme.sizes[8],
    backgroundColor: theme.colors.greenTransparent,
    borderRadius: 15,


    
  },
  Title: {
    color: theme.colors.text,
    opacity: 0.5,
  },
  buttonText: {
    fontSize: theme.sizes[2],
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.text,
    opacity: 0.4,
  },
}));
