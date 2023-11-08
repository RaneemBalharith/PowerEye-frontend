import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const DeviceCardScreen =({route})=>{
    return(
        <View style={styles.container}>
            <Text>{route.params.item.title} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})