import React, { useContext,useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {FirstTabView} from "../../components/totalPageAnalysis/firstTabView";
import Card from "../../components/Card";
import { PowerEyeContext } from "../../services/powerEye.context";
import { getTheTotalEnergyRequest } from "../../api/apiManager";
export const TotalEnergyConsumptionScreen = ({ navigation }) => {
  const [totalDailyEnergy, setTotalDailyEnergy] = useState(0)
  const { token ,convertEnergyToCO2e, convertEnergyToCost } =
    useContext(PowerEyeContext);
    useEffect(()=>{
      getTheTotalEnergyRequest(token, 'daily' ).then((res)=>{
        if(res){
          setTotalDailyEnergy(res)
      }else{
        setTotalDailyEnergy(0)
      }
      })
    },[])
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back-outline"
            size={35}
            color="#00707C"
            style={styles.backArrow}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>Total Energy Consumption</Text>
        </View>
      </View>
      <Text style={{ paddingTop: 30, paddingLeft: 30, fontSize: 18 }}>
        Today's Analysis:
      </Text>
      <View style={styles.cardView}>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Energy </Text>
          <Text style={styles.cardContent}>{totalDailyEnergy.toFixed(3)}KwH</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Cost</Text>
          <Text style={styles.cardContent}>{convertEnergyToCost(totalDailyEnergy)} SAR</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>CO2 </Text>
          <Text style={styles.cardContent}>{convertEnergyToCO2e(totalDailyEnergy)} kg</Text>
        </Card>
      </View>
      <View style={styles.tabContainer}>
        <FirstTabView />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8F9",
  },
  header: {
    flexDirection: "row",
    paddingTop: 70,
    paddingLeft: 10,
    alignItems: "center",
  },
  backArrow: {
    marginRight: 10,
  },
  title: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 35,
  },
  tabContainer: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#F0F8F9",
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: 14,
  },
  cardContent: {
    paddingTop: 10,
    color: "#00707C",
    fontSize: 17,
    fontWeight: "bold",
  },
});
