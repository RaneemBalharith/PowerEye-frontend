import React from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import { TotalEnergyConsumptionScreen } from "../../screens/totalEnergyConsumption/totalEnergyConsumption.screen";
import { SotScreen } from "../../screens/totalEnergyConsumption/SotScreen";
import { CostScreen } from "../../screens/totalEnergyConsumption/cost";

const TotalEnergyConsumptionStack = createStackNavigator();
const screenOptions = ({ route }) => ({
    headerShown: false,
    ...TransitionPresets.ModalPresentaionIOS,
  });
export const TotalEnergyConsumptionNavigator = () => (
  <TotalEnergyConsumptionStack.Navigator  screenOptions={screenOptions}>
        <TotalEnergyConsumptionStack.Screen name="totalEnergyConsumption1" component={TotalEnergyConsumptionScreen}  />
        <TotalEnergyConsumptionStack.Screen name="sot" component={SotScreen}  />
        <TotalEnergyConsumptionStack.Screen name="cost" component={CostScreen}  />
  </TotalEnergyConsumptionStack.Navigator>
);
