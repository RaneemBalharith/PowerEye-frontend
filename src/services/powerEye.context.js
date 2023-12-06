import React, { createContext, useContext, useEffect, useState } from "react";
import { NavigationContainerRef } from '@react-navigation/native';
import axios from 'axios';
export const PowerEyeContext = createContext();
const useMyContext = () => {
  return useContext(PowerEyeContext);
};
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfileInfoRequest, getTheTotalEnergyRequest, getImage, getRoomApplianceRequest, getSmartPlugsRequest, getRoomsRequest, getApplianceEnergyRequest, getAllApplianceRequest, getTotalEnergyRequest, getCurrentMonthEnergyRequest } from "../api/apiManager";
const PowerEyeContextProvider = ({ children, setGetToken, screenName, notification }) => {
  const [allNotifications, setAllNotifications] = useState([])
  const [loggedIn, setLoggedIn] = useState(false);
  const [roomModalVisible, setRoomModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [energyGoal, setEnergyGoal] = useState("");
  const [smartPlugs, setSmartPlugs] = useState([])
  const [appliances, setAppliances] = useState([])
  const [applianceId, setApplianceId] = useState("")
  const [applianceClickedId, setApplianceClickedId] = useState()
  const [refresh, setRefresh] = useState()
  const [currentMonthEnergy, setCurrentMonthEnergy] = useState();
  const [goBackNavigation, setGoBackNavigation] = useState();
  const [appliance_ids, setAppliance_ids] = useState([]);
  const [totalEnergyThisMonth, setTotalEnergyThisMonth] = useState();
  const [ttotalEnergyThisMonth, setTTotalEnergyThisMonth] = useState([]);
  const [totalEnergyLastMonth, setTotalEnergyLastMonth] = useState([]);
  const [ttotalEnergyWeeks, setTTolalEnergyWeeks] = useState([]);
  const [totalEnergyWeeks, setTotalEnergyWeeks] = useState();
  const [ttotalEnergyYears, setTTolalEnergyYears] = useState([]);
  const [totalEnergyYears, setTotalEnergyYears] = useState();
  const [totalDailyEnergy, setTotalDailyEnergy] = useState();
  const [totalAEnergyWeeks, setTotalAEnergyWeeks] = useState([])
  const [navigateTo, setNavigateTo] = useState()
  const [modalVisible, setModalVisible] = useState(false);
  const [ttotalAEnergyWeeks, setTtotaAEnergyWeeks] = useState()
  const [network, setNetwork] = useState(false)
  const weeks = [{ week: 'This Week', id: 0 }, { week: 'Last Week', id: 1 }, { week: 'Two Week Ago', id: 2 }, { week: 'Three Weeks Ago', id: 3 }, { week: 'Forth Weeks Ago', id: 4 }]
  const years = [{ year: 'This Year', id: 0 }, { year: 'Last Year', id: 1 }]
  const [rooms, setRooms] = useState([])
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  const [progress, setProgress] = useState(0);
  const [onAddDevice, setOnAddDevice] = useState(false);
  const [showError, setShowError] = useState(false)
  //this is maded for month 
  const getAllApplianceWithTimeEnergy = async (token, timeframe, timeSinceCurrent, appliances) => {
    let totalYear = appliances.map(async (appliance) => {
      let resualt = await getApplianceEnergyRequest(token, appliance.id, timeframe, timeSinceCurrent).then((res) => {
        if (res["energy_values"]) {
          let energy = res["energy_values"].map((en) => {
            return en[1]
          }).reduce((sum, num) => sum + num)
          return {
            name: appliance.name,
            energy: energy,
            title: res["month"]
          }
        }
      })
      return resualt

    })
    return Promise.all(totalYear).then((mappedData) => {
      return mappedData.filter((value) => value !== undefined)
    })
  }

  // this is maded for week
  const getAllApplianceWithTimeEnergyWeekly = async (token, title, timeframe, timeSinceCurrent, appliances) => {
    let totalYear = appliances.map(async (appliance) => {
      let resualt = await getApplianceEnergyRequest(token, appliance.id, timeframe, timeSinceCurrent).then((res) => {
        if (res["energy_values"]) {
          let energy = res["energy_values"].map((en) => {
            return en[1]
          }).reduce((sum, num) => sum + num)
          return {
            name: appliance.name,
            energy: energy,
            title: title
          }
        }
      })
      return resualt

    })
    return Promise.all(totalYear).then((mappedData) => {
      return mappedData.filter((value) => value !== undefined)
    })
  }



  const convertEnergyToCO2e = (energyValue) => {
    // Assuming a fixed rate for CO2e calculation
    const ECF = 0.569; // Cost per kWh (change this value as needed)

    // Perform the conversion
    let CO2e = energyValue * ECF;
    CO2e = CO2e.toFixed(2);
    return CO2e;
  };
  const convertEnergyToCost = (energyValue) => {
    // Assuming a fixed rate for cost calculation
    const RCT = 0.8 / 100; // Cost per kWh (change this value as needed)

    // Perform the conversion
    let cost = energyValue * RCT;
    cost = cost.toFixed(3);
    return cost;
  };
  const convertCostToEnergy = (costValue) => {
    // Assuming a fixed rate for cost calculation
    const RRCT = 100 / 0.8; // Cost per kWh (change this value as needed)

    // Perform the conversion
    let energy = costValue * RRCT;
    energy = energy.toFixed(2);
    return energy;
  };

  const saveToken = async () => {
    try {

      await AsyncStorage.setItem('Token', JSON.stringify(token))
    } catch (e) {
      console.log(e)
    }
  }
  const loadToken = async () => {
    try {
      const savedToken = await AsyncStorage.getItem('Token')
      if (savedToken.length) {
        // console.log('token loaded success', savedToken)
        // console.log(savedToken)
        setToken(JSON.parse(savedToken))
      }
    } catch (e) {
      console.log(e)
    }
  }
  // savenotifications
  const saveNotifications = async () => {
    try {

      await AsyncStorage.setItem('mynotification', JSON.stringify(allNotifications))
    } catch (e) {
      console.log(e)
    }
  }
  const loadNotifications = async () => {
    try {
      const savedNotifications = await AsyncStorage.getItem('mynotification')
      if (savedNotifications.length) {
        setAllNotifications(JSON.parse(savedNotifications))
      }
    } catch (e) {
      console.log(e)
    }
  }
  const saveProfileName = async () => {
    try {

      await AsyncStorage.setItem('username', JSON.stringify(username))
    } catch (e) {
      console.log(e)
    }
  }
  const loadProfileName = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username')
      if (savedUsername.length) {
        setUsername(JSON.parse(savedUsername))
      }
    } catch (e) {
      console.log(e)
    }
  }

  const saveEmail = async () => {
    try {

      await AsyncStorage.setItem('email', JSON.stringify(email))
    } catch (e) {
      console.log(e)
    }
  }
  const loadEmail = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('email')
      if (savedEmail.length) {
        setEmail(JSON.parse(savedEmail))
      }
    } catch (e) {
      console.log(e)
    }
  }
  const saveConsumption = async () => {
    try {

      await AsyncStorage.setItem('consumption', JSON.stringify(currentMonthEnergy))
    } catch (e) {
      console.log(e)
    }
  }
  const loadConsumption = async () => {
    try {
      const savedConsumption = await AsyncStorage.getItem('consumption')
      if (savedConsumption.length) {
        setCurrentMonthEnergy(JSON.parse(savedConsumption))
      }
    } catch (e) {
      console.log(e)
    }
  }
  const saveGoal = async () => {
    try {

      await AsyncStorage.setItem('goal', JSON.stringify(energyGoal))
    } catch (e) {
      console.log(e)
    }
  }
  const loadGoal = async () => {
    try {
      const savedEnergyGoal = await AsyncStorage.getItem('goal')
      if (savedEnergyGoal.length) {
        setEnergyGoal(JSON.parse(savedEnergyGoal))
      }
    } catch (e) {
      console.log(e)
    }
  }
  const saveAppliances = async () => {
    try {

      await AsyncStorage.setItem('appliances', JSON.stringify(appliances))
    } catch (e) {
      console.log(e)
    }
  }
  const loadAppliances = async () => {
    try {
      const savedAppliances = await AsyncStorage.getItem('appliances')
      if (savedAppliances.length) {
        setAppliances(JSON.parse(savedAppliances))
      }
    } catch (e) {
      console.log(e)
    }
  }
  const saveImage = async () => {
    try {

      await AsyncStorage.setItem('image', JSON.stringify(image))
    } catch (e) {
      console.log(e)
    }
  }
  const loadImage = async () => {
    try {
      const savedImage = await AsyncStorage.getItem('image')
      if (savedImage.length) {
        setImage(JSON.parse(savedImage))
      }
    } catch (e) {
      console.log(e)
    }
  }
  const saveSmartPlugs = async () => {
    try {

      await AsyncStorage.setItem('smartPlugs', JSON.stringify(smartPlugs))
    } catch (e) {
      console.log(e)
    }
  }
  const loadSmartPlugs = async () => {
    try {
      const savedSmartPlugs = await AsyncStorage.getItem('smartPlugs')
      setSmartPlugs(JSON.parse(savedSmartPlugs))
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getAllApplianceRequest(token).then((res) => {
      // console.log(res["appliances"])
      setAppliances(res["appliances"].map((appliance) => {
        return {
          ...appliance, consumption: 0, cost: 0
        }
      }))
    })
    getImage(token).then((res) => {
      setImage(res.image)
    })
    getProfileInfoRequest(token).then((res) => {
      setUsername(res['user_info'].username)
      setEmail(res['user_info'].email)
      setEnergyGoal(res['user_info'].energy_goal)
    })
    getCurrentMonthEnergyRequest(token).then((res) => {
      setCurrentMonthEnergy(res)
    })
    getRoomsRequest(token).then((res) => {
      setRooms(res['rooms'])
      // console.log(res['rooms'])
    })
    getSmartPlugsRequest(token).then((res) => {
      // console.log("plugs",res)
      setSmartPlugs(res["Smart Plugs"])
    })

    setRefresh(false)
  }, [refresh])
  useEffect(() => {
    if (token.length) {
      loadToken()
      loadNotifications()
      loadProfileName()
      loadEmail()
      loadConsumption()
      loadGoal()
      loadAppliances()
      loadImage()
      loadSmartPlugs()
    }
    const refreshHomePage = setInterval(() => {
      getProfileInfoRequest(token).then((res) => {
        // console.log(res)
        setEnergyGoal(res['user_info'].energy_goal)
        // setCurrentMonthEnergy(res['user_info'].current_month_energy)
      })
    }, 60000);

    return () => clearInterval(refreshHomePage);
  }, [])
  useEffect(() => {
    if (notification && !allNotifications.find((storedNotificaion) => storedNotificaion.id == notification.id)) {
      setAllNotifications([...allNotifications, notification])
    }
    console.log(notification)
  }, [notification])
  useEffect(() => {
    if (allNotifications) {
      saveNotifications()
    }

  }, [allNotifications])


  useEffect(() => {
    saveToken()

    if (token == "") {
      getImage(token).then((res) => {
        // console.log(res)
        setImage(res.image)
      })
      getProfileInfoRequest(token).then((res) => {
        // console.log(res)
        setUsername(res['user_info'].username)
        setEmail(res['user_info'].email)
        setEnergyGoal(res['user_info'].energy_goal)
        // setCurrentMonthEnergy(res['user_info'].current_month_energy)
      })
      getCurrentMonthEnergyRequest(token).then((res) => {
        setCurrentMonthEnergy(res)
      })
      getSmartPlugsRequest(token).then((res) => {
        // console.log("plugs",res)
        setSmartPlugs(res["Smart Plugs"])
      })
      getAllApplianceRequest(token).then((res) => {
        // console.log(res["appliances"])
        setAppliances(res["appliances"].map((appliance) => {
          return {
            ...appliance
          }
        }))
      })

      getRoomsRequest(token).then((res) => {
        setRooms(res['rooms'])
        // console.log(res['rooms'])
      })
      getTotalEnergyRequest(token, 1, 0).then((res) => {
        // console.log('daily enrgy',res['energy_values'])
        if (res['energy_values']) {
          setTotalDailyEnergy(res['energy_values'])
          console.log(res['energy_values'])
        }


      })


    }
    setGetToken(token)
  }, [token])
  useEffect(() => {


  }, [appliances])
  useEffect(() => {
    saveProfileName()

  }, [username])
  useEffect(() => {

    saveEmail()


  }, [email])
  useEffect(() => {
    saveConsumption()

  }, [currentMonthEnergy])
  useEffect(() => {
    saveGoal()
  }, [energyGoal])
  useEffect(() => {
    saveAppliances()
  }, [appliances])
  useEffect(() => {
    saveImage()
  }, [image])
  useEffect(() => {
    saveSmartPlugs()
  }, [smartPlugs])
  useEffect(() => {
    if (token == "") {
      setAppliances([])
      setUsername("")
      setEmail("")
      setEnergyGoal(0)
      setCurrentMonthEnergy(0)
      setImage("")
      setAllNotifications([])
      setSmartPlugs([])
    }
  }, [token])
  return (
    <PowerEyeContext.Provider
      value={{
        image,
        username,
        setUsername,
        setImage,
        loggedIn,
        setLoggedIn,
        progress,
        onAddDevice,
        setOnAddDevice,
        email,
        setEmail,
        password,
        setPassword,
        token,
        setToken,
        energyGoal,
        setEnergyGoal,
        currentMonthEnergy,
        convertEnergyToCO2e,
        convertEnergyToCost,
        convertCostToEnergy,
        smartPlugs, appliances,
        applianceId, setApplianceId,
        goBackNavigation, setGoBackNavigation,
        setRefresh,
        appliance_ids, setAppliance_ids,
        totalEnergyThisMonth, setTotalEnergyThisMonth,
        totalEnergyLastMonth, setTotalEnergyLastMonth, ttotalEnergyThisMonth,
        ttotalEnergyWeeks, ttotalEnergyYears, totalDailyEnergy,
        rooms, ttotalAEnergyWeeks,
        showError, setShowError,
        applianceClickedId, setApplianceClickedId,
        navigateTo, setNavigateTo,
        screenName,
        allNotifications, setAllNotifications,
        refresh,
        modalVisible, setModalVisible,
        roomModalVisible, setRoomModalVisible
      }}
    >
      {children}
    </PowerEyeContext.Provider>
  );
};
export { PowerEyeContextProvider, useMyContext };