import React , {useState,useContext} from 'react';
import { StyleSheet,View,Image,Dimensions,Text } from 'react-native';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { PowerEyeContext } from '../../services/powerEye.context';
import { ThemeContext } from '../../services/theme.context';
export const Header = () =>{
  const {theme} = useContext(ThemeContext)
  const {image,username} = useContext(PowerEyeContext)
    return(
        <View style={styles(theme).Header}>
        <View style={styles(theme).HeaderWrapper}>
          <View style={styles(theme).ProfileImageWrapper}>
          {image ? <Image
          style={styles(theme).ProfileImage}
          source={{uri : image}}
        /> : 
        <Image
          style={styles(theme).ProfileImage}
          source={require("../../../assets/profile.jpg")}
        />}
          </View>
          <View style={{ flexDirection: "column", marginTop: 25 }}>
            <Text style={styles(theme).AccountName}>Hi {username} !</Text>
            <Text style={styles(theme).Description}>welcome to home ...</Text>
          </View>
        </View>
      </View>
    )
}
const styles = StyleSheet.create((theme)=>({
    Header: {
        height: windowHeight * 0.2,
        backgroundColor: theme.colors.greenTransparent,
        justifyContent: "center",

      },
      HeaderWrapper: {
        flexDirection: "row",
        margin: theme.space[1],
        alignItems: "center",
      },
      ProfileImage: {
        height: theme.sizes[6],
        width: theme.sizes[6],
        borderRadius: theme.sizes[6],
      },
      ProfileImageWrapper: {
        margin: theme.space[1],
        justifyContent: "center",
        alignItems: "center",
        height: theme.sizes[7]-5,
        width: theme.sizes[7]-5,
        borderRadius: theme.sizes[6],
        backgroundColor: theme.colors.borderColor,
        
      },
      
      AccountName: {
        fontSize: theme.sizes[3],
        fontWeight: theme.fontWeights.bold,
        color: "rgba(0,0,0,0.7)",
      },
      Description: {
        fontSize: 15,
        color: "rgba(0,0,0,0.5)",
      },
}))