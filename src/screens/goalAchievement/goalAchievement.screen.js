import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const GoalAchievementScreen =()=>{
    return(
        <View style={styles.container}>
            <Text>GoalAchievementScreen</Text>
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