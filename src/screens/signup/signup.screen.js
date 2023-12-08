import React, { useContext, useState } from 'react'; 
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image, KeyboardAvoidingView, Platform } from 'react-native'; 
import { PowerEyeContext } from '../../services/powerEye.context'; 
import { signupRequest } from '../../api/apiManager'; 
import { ScrollView } from 'react-native-gesture-handler';
export const SignupScreen = ({ navigation }) => { 
  const {setLoggedIn} = useContext(PowerEyeContext) 
  const [email, setEmail] = useState(''); 
  const [powerEyePassword, setPowerEyePassword] = useState(''); 
  const [confirmPowerEyePassword, setConfirmPowerEyePassword] = useState(''); 
  const [merossPassword, setMerossPassword] = useState(''); 
  const [signupStatus, setSignupStatus] = useState(''); 
  const [inputErrors, setInputErrors] = useState({ 
    email: false, 
    powerEyePassword: false, 
    confirmPowerEyePassword: false, 
    merossPassword: false, 
  }); 
const validatePowerEyePassword = (password) => { 
    const passwordErrors = []; 
    if (password.length < 8) { 
      passwordErrors.push("Password should be at least 8 characters long"); 
    } 
    if (!/[a-z]/.test(password)) { 
      passwordErrors.push("Password should include at least one lowercase letter"); 
    } 
    if (!/[A-Z]/.test(password)) { 
      passwordErrors.push("Password should include at least one uppercase letter"); 
    } 
    if (!/\d/.test(password)) { 
      passwordErrors.push("Password should include at least one numeric digit"); 
    } 
    if (!/[!@#$]/.test(password)) { 
      passwordErrors.push("Password should include at least one special character (!, @, #, $)"); 
    } 
    return passwordErrors; 
  }; 
  const handleSignup = () => { 
    if (email && powerEyePassword && confirmPowerEyePassword && merossPassword) { 
      if (!validateEmail(email)) { 
        setSignupStatus('Please enter a valid email'); 
        setInputErrors((prevErrors) => ({ 
          ...prevErrors, 
          email: true, 
        })); 
      } else if (powerEyePassword !== confirmPowerEyePassword) { 
        setSignupStatus('Passwords do not match'); 
        setInputErrors((prevErrors) => ({ 
          ...prevErrors, 
          powerEyePassword: true, 
          confirmPowerEyePassword: true, 
        })); 
      } else if (validatePowerEyePassword(powerEyePassword).length != 0) { 
        setSignupStatus(validatePowerEyePassword(powerEyePassword)); 
        setInputErrors((prevErrors) => ({ 
          ...prevErrors, 
          powerEyePassword: true, 
          confirmPowerEyePassword: true, 
        })); 
      } else { 
        signupRequest(email,powerEyePassword,merossPassword).then((res)=>{ 
 
          if(res["message"] === "User created successfully." ){ 
            navigation.navigate('LoginScreen');  
          } 
          setSignupStatus("Invalid Meross credentials. Please check your email and password") 
          
        }) 
        setSignupStatus(''); 
        setInputErrors({ 
          email: false, 
          powerEyePassword: false, 
          confirmPowerEyePassword: false, 
          merossPassword: false, 
        }); 
         
         
      } 
    } else { 
      setSignupStatus('Please fill in all the fields'); 
      setInputErrors({ 
        email: !email, 
        powerEyePassword: !powerEyePassword, 
        confirmPowerEyePassword: !confirmPowerEyePassword, 
        merossPassword: !merossPassword, 
      }); 
    } 
  }; 
 
  const validateEmail = (email) => { 
    const emailRegex = /\S+@\S+\.\S+/; 
    return emailRegex.test(email); 
  }; 
 
  return ( 
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        
      <View style={styles.innerContainer}>

    <View style={styles.container}> 
      <Image source={require('../../../assets/images/Signupic.gif')} style={styles.SignupPic} /> 
 
      <View style={styles.imageContainer}> 
        <Image source={require('../../../assets/images/PowerEyeLogo.png')} style={styles.PowerEyeLogo} /> 
        <Image source={require('../../../assets/images/MerossLogo.png')} style={styles.MerossLogo} /> 
      </View> 
 
      <View style={styles.inputContainer}> 
        <TextInput 
          style={[ 
            styles.input, 
            inputErrors.email && styles.inputError, 
          ]}placeholder="Email" 
          value={email} 
          onChangeText={(text) => setEmail(text)} 
          onFocus={() => setInputErrors((prevErrors) => ({ ...prevErrors, email: false }))} 
        /> 
        <TextInput 
          style={[ 
            styles.input, 
            inputErrors.powerEyePassword && styles.inputError, 
          ]} 
          placeholder="PowerEye Password" 
          secureTextEntry 
          value={powerEyePassword} 
          onChangeText={(text) => setPowerEyePassword(text)} 
          onFocus={() => setInputErrors((prevErrors) => ({ ...prevErrors, powerEyePassword: false }))} 
        /> 
        <TextInput 
          style={[ 
            styles.input, 
            inputErrors.confirmPowerEyePassword && styles.inputError, 
          ]} 
          placeholder="Confirm PowerEye Password" 
          secureTextEntry 
          value={confirmPowerEyePassword} 
          onChangeText={(text) => setConfirmPowerEyePassword(text)} 
          onFocus={() => setInputErrors((prevErrors) => ({ ...prevErrors, confirmPowerEyePassword: false }))} 
        /> 
        <TextInput 
          style={[ 
            styles.input, 
            inputErrors.merossPassword && styles.inputError, 
          ]} 
          placeholder="Meross Password" 
          secureTextEntry 
          value={merossPassword} 
          onChangeText={(text) => setMerossPassword(text)} 
          onFocus={() => setInputErrors((prevErrors) => ({ ...prevErrors, merossPassword: false }))} 
        /> 
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: "#00707C" }]} 
          onPress={handleSignup} 
        > 
          <Text style={styles.buttonText}>Signup</Text> 
        </TouchableOpacity> 
        {signupStatus !== '' && <Text style={styles.signupStatusText}>{signupStatus}</Text>} 
        <Text style={styles.signupText}> 
          Already have an account? 
          <Text style={styles.signupLink} onPress={() => navigation.navigate('LoginScreen')}> 
            Log in 
          </Text> 
        </Text> 
      </View> 
    </View> 
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  ); 
}; 
 
  const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "white",
      
    }, 
    innerContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },  
  input: {
    width: 350,
    height: 55,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign: "left",
    borderRadius: 10,
  },

    inputError: { 
      borderColor: 'red', 
    }, 
    signupText: { 
      marginBottom: 10,
      textAlign: "center",
  
    }, 
    signupLink: { 
      color: "#00707C",
      fontWeight: "bold",
  
    }, 
    button: { 
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
  
    }, 
    buttonText: { 
     
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    }, 
    imageContainer: { 
     
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, 
    }, 
    SignupPic: { 
      marginBottom: 20, 
      marginTop: 90, 
      width: 200, 
      height: 200, 
      resizeMode: 'cover', 
    }, 
    MerossLogo: { 
      flex: 1, // Take up available space
      height: 50,
      resizeMode: "contain", // Adjust image content to fit
  
    }, 
    PowerEyeLogo: { 
    flex: 1, // Take up available space
    height: 50,
    marginRight: 10,
    resizeMode: "contain", // Adjust image content to fit

    }, 
    signupStatusText: { 
   
      color: "red",
      marginBottom: 10,
  
    }, 
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: "center",
    },
  });