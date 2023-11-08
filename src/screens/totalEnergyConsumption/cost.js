import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const CostScreen =()=>{
    return(
        <View style={styles.container}>
            <Text>this the cost</Text>
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