import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const SotScreen =()=>{
    return(
        <View style={styles.container}>
            <Text>SotScreen</Text>
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