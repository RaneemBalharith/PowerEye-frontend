import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard, Dimensions, TouchableOpacity, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import SaveGoal from '../../components/saveGoalChanges';
import { Ionicons } from '@expo/vector-icons';
import { GoalAchievement } from '../../components/goalAchievement';
import { PowerEyeContext } from '../../services/powerEye.context';
import { addGoalRequest, deleteGoalRequest, getLastMonthEnergy } from '../../api/apiManager';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
let prevEnergy = 0;


export const GoalAchievementScreen = ({ navigation }) => {
  const { token, convertEnergyToCost, energyGoal, setRefresh, convertCostToEnergy } = useContext(PowerEyeContext)
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [percentage, setPercentage] = useState(null);
  const [analysis, setAnalysis] = useState('No Goal');
  const [modalVisible, setModalVisible] = useState(false);
  const [energyValueDB, setEnergyValueDB] = useState(0)
  const compareCostGoal = (costGoal, lastMonthEnergy) => {
    const lastMonthCost = convertEnergyToCost(lastMonthEnergy);
    let percentage = (costGoal / lastMonthCost) * 100;
    percentage = percentage.toFixed(2);
    return percentage;

  }
  const handleButtonPress = () => {
    if (!validateInput()) {
      return;
    }
    console.log('here', energyGoal, prevEnergy)
    const costGoal = convertEnergyToCost(energyGoal);
    const lastMonthCost = convertEnergyToCost(prevEnergy);
    const percentage = compareCostGoal(costGoal, prevEnergy);
    setPercentage(percentage);
    let newAnalysis = '';
    if (costGoal > lastMonthCost) {
      newAnalysis = 'greater than last month.';
    } else if (costGoal < lastMonthCost) {
      newAnalysis = 'less than last month';
    } else {
      newAnalysis = 'same as last month';
    }
    setAnalysis(newAnalysis);

    console.log('save change successfully');
    addGoalRequest(token, convertCostToEnergy(inputValue)).then((res) => {
      setRefresh('goal saved')
    })

  };

  const handleRemoveGoal = () => {
    setModalVisible(true);

  };

  const confirmRemoveGoal = () => {
    // Perform the DELETE request or any action required
    console.log('Remove goal successfully');
    setModalVisible(false);
    setPercentage(null); // Reset percentage to null
    setAnalysis('No Goal'); // Reset analysis to 'No Goal'
    deleteGoalRequest(token).then((res) => {
      console.log(res)
    })
    setRefresh('goal deleted')
  };

  const cancelRemoveGoal = () => {
    setModalVisible(false);
  };


  //validation cost goal function
  const validateInput = () => {
    const parsedValue = parseFloat(inputValue);
    if (isNaN(parsedValue) || parsedValue <= 0) {
      setError('Please enter a valid positive numeric value');
      return false;
    }
    setError('');
    return true;
  };

  useEffect(() => {
    getLastMonthEnergy(token).then((res) => {
      prevEnergy = res;
      const costGoal = convertEnergyToCost(energyGoal);
      const lastMonthCost = convertEnergyToCost(res);
      console.log(costGoal, lastMonthCost)
      const percentage = compareCostGoal(costGoal, res);
      setPercentage(percentage);

      // Determine the analysis text based on the comparison
      let newAnalysis = '';
      if (costGoal > lastMonthCost) {
        newAnalysis = 'greater than last month.';
      } else if (costGoal < lastMonthCost) {
        newAnalysis = 'less than last month';
      } else {
        newAnalysis = 'same as last month';
      }
      setAnalysis(newAnalysis);
    })
  }, [])
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}>
        <ScrollView >
          <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard');
          }}>
            <View>
              <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={35} color="#00707C" style={styles.backArrow} onPress={() => navigation.goBack()} />
                <Text style={styles.title}>Goal Settings</Text>
              </View>
              <View>
                <GoalAchievement progress={0} />
              </View>
              <View style={styles.GoalAchievementCard}>
                <View style={styles.CardTitleWrapper}>
                  <Text style={styles.GoalAchievementTitle}> The goal is:<Text style={styles.GoalAchievementTitleInside}>  {percentage !== null && (
                    <Text >{percentage}%</Text>
                  )}  </Text>{analysis}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.edit}>Edit Goal Settings:</Text>
                <View style={styles.specf}>
                  <Text>-  The input must be a numeric value.</Text>
                  <Text>-  The input must be a positive value.</Text>
                  <Text>-  Input must be less/equal total energy cost since the beginning of the month. </Text>
                </View>
              </View>
              <View style={styles.field}>
                <Text style={styles.addGoal}>Cost Goal: </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.input, error && styles.inputError]}
                    placeholder="e.g. 4357"
                    placeholderTextColor="#CCCCCC"
                    autoCapitalize="none"
                    keyboardType="numeric"
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}

                  />

                  {error ? <Text style={styles.errorText}>{error}</Text> : null}


                </View>
              </View>

              <View>

              </View>
              <View style={styles.buttons}>
                <SaveGoal text="Save Changes" onPress={handleButtonPress} error={error} />
                <TouchableOpacity onPress={handleRemoveGoal}>
                  <View style={styles.removeGoalButton}>
                    <Text style={styles.removeGoalText}>Remove Goal</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Are you sure you want to Remove your goal?</Text>
                    <Text style={styles.modalContent}>Once you remove this goal, it can’t be restored.
                      You will lose access to to past data and analysis.</Text>
                    <View style={styles.modalButtonContainer}>
                      <TouchableOpacity style={styles.confirmButton} onPress={confirmRemoveGoal}>
                        <Text>Remove</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.cancelButton} onPress={cancelRemoveGoal}>
                        <Text>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8F9',
  },

  header: {
    flexDirection: 'row',
    paddingTop: 70,
    paddingLeft: 10,
    alignItems: 'center',
  },
  backArrow: {
    marginRight: 10,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 85,
  },
  edit: {
    paddingTop: 50,
    paddingLeft: 35,
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.8,
    paddingBottom: 20,
  },
  specf: {
    paddingLeft: 45,

  },
  input: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20,
    height: 50,
    borderColor: '#FCF5F5',
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 6,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  addGoal: {
    paddingTop: 25,
    paddingLeft: 35,
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    paddingBottom: 30,
  },
  errorText: {
    color: 'red',
    marginRight: 30,
    marginLeft: 35,

  },
  inputError: {
    borderColor: 'red',
  },
  percentageText: {
    color: 'green',
    fontSize: 25,
  },
  CardTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  GoalAchievementCard: {
    marginTop: 20,
    borderRadius: windowHeight * 0.02,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    margin: 10,
    padding: 15,
    justifyContent: "center",
    backgroundColor: '#9EB8B5',
  },
  GoalAchievementTitle: {
    fontSize: 14,
    color: "#black",
    fontWeight: "bold",
    margin: 5,
  },
  GoalAchievementTitleInside: {
    fontSize: 16,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    color: "#00707C",
  },
  removeGoalButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#B43232',
  },
  removeGoalText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  confirmButton: {
    backgroundColor: '#B43232',
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  cancelButton: {
    backgroundColor: '#CCCCCC',
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B43232',
    marginBottom: 16,
    textAlign: 'left',
  },
  modalContent: {
    fontSize: 16,
    color: '#00707C',
    marginBottom: 16,
    textAlign: 'left',
    padding: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});


