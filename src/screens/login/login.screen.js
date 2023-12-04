import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { PowerEyeContext } from "../../services/powerEye.context";
import {authRequest} from '../../api/apiManager';
import { ScrollView } from "react-native-gesture-handler";

export const LoginScreen = ({ navigation }) => {
  const { setLoggedIn, email, setEmail, password, setPassword,setToken } =
    useContext(PowerEyeContext);

  const [loginupStatus, setLoginStatus] = useState("");
  const [inputErrors, setInputErrors] = useState({
    email: false,
    password: false,
  });

  const handleLogin = () => {
    if (email && password) {
      if (!validateEmail(email)) {
        setLoginStatus("Please enter a valid email");
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          email: true,
        }));
      } else {
      authRequest(email,password).then(token=> {
    
         if(token){
          setToken(token['token'])
          console.log(token['token'])
          
         }
         
         
         if(token['error']){
          setLoginStatus(token['error']);
          setInputErrors({
            email: !email,
            password: !password,
          })
          

         }
        })
        setLoginStatus("");
        setInputErrors({
          email: false,
          powerEyePassword: false,
          confirmPowerEyePassword: false,
          merossPassword: false,
        });
        // Display success message or navigate to the next screen
        

         // for HOME!!!!!!!!!!!!!
      }
    } else {
      setLoginStatus("Please fill in all the fields");
      setInputErrors({
        email: !email,
        password: !password,
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

      <Image
        source={require("../../../assets/images/Loginpic.gif")}
        style={styles.LogInPic}
      />

      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/PowerEyeLogo.png")}
          style={styles.PowerEyeLogo}
        />
        <Image
          source={require("../../../assets/images/MerossLogo.png")}
          style={styles.MerossLogo}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, inputErrors.email && styles.inputError]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onFocus={() =>
            setInputErrors((prevErrors) => ({ ...prevErrors, email: false }))
          }
        />
        <TextInput
          style={[styles.input, inputErrors.password && styles.inputError]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          onFocus={() =>
            setInputErrors((prevErrors) => ({ ...prevErrors, password: false }))
          }
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#00707C" }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {loginupStatus !== "" && (
          <Text style={styles.loginStatusText}>{loginupStatus}</Text>
        )}
        <Text style={styles.signupText}>
          Don't have an account?
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("SignupScreen")}
          >
            Sign up
          </Text>
        </Text>
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
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 20,
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
    borderColor: "red",
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
  loginStatusText: {
    color: "red",
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  PowerEyeLogo: {
    flex: 1, // Take up available space
    height: 50,
    marginRight: 10,
    resizeMode: "contain", // Adjust image content to fit
  },
  MerossLogo: {
    flex: 1, // Take up available space
    height: 50,
    resizeMode: "contain", // Adjust image content to fit
  },
  LogInPic: {
    width: "60%", // Take up the full width
    height: 150,
    borderRadius: 10,
    resizeMode: "cover", // Adjust image content to cover
  },
});

export default LoginScreen;