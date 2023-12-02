import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { PowerEyeContext } from "../../services/powerEye.context";
import {authRequest} from '../../api/apiManager'
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
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
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
    margin: 20,
    textAlign: "center",
    fontFamily: "Times New Roman",
    fontSize: 21.5,
    color: "black",
  },
  signupLink: {
    color: "#00707C",
    textDecorationLine: "none",
  },
  button: {
    width: 350,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  LogInPic: {
    marginBottom: 40,
    marginTop: 80,
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  MerossLogo: {
    marginLeft: 10,
    width: 160,
    height: 50,
    resizeMode: "contain",
  },
  PowerEyeLogo: {
    width: 200,
    height: 75,
    resizeMode: "contain",
  },
  loginStatusText: {
    color: "red",
    textAlign: "center",
    fontFamily: "Times New Roman",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
});
