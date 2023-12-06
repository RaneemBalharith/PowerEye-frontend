import React, { useContext, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { PowerEyeContext } from '../../services/powerEye.context';
import { signupRequest } from '../../api/apiManager';

export const SignupScreen = ({ navigation }) => {
  const { setLoggedIn } = useContext(PowerEyeContext);
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
      } else {
        const passwordErrors = validatePowerEyePassword(powerEyePassword);
        if (passwordErrors.length > 0) {
          setSignupStatus(passwordErrors.join('\n'));
          setInputErrors((prevErrors) => ({
            ...prevErrors,
            powerEyePassword: true,
            confirmPowerEyePassword: true,
          }));
        } else {
          // Clear error messages and input errors
          setSignupStatus('');
          setInputErrors({
            email: false,
            powerEyePassword: false,
            confirmPowerEyePassword: false,
            merossPassword: false,
          });

          navigation.navigate('Home');
        }
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

  const validatePowerEyePassword = (password) => {
    const passwordErrors = [];
    if (password.length < 8) {
      passwordErrors.push('Password should be at least 8 characters long');
    }
    if (!/[a-z]/.test(password)) {
      passwordErrors.push('Password should include at least one lowercase letter');
    }
    if (!/[A-Z]/.test(password)) {
      passwordErrors.push('Password should include at least one uppercase letter');
    }
    if (!/\d/.test(password)) {
      passwordErrors.push('Password should include at least one numeric digit');
    }
    if (!/[!@#$]/.test(password)) {
      passwordErrors.push('Password should include at least one special character');
    }
    return passwordErrors;
  };

  return (
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
          ]}
          placeholder="Email"
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    width: 350,
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign: 'left',
    borderRadius: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  signupText: {
    margin: 20,
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    fontSize: 21.5,
    color: 'black',
  },
  signupLink: {
    color: "#00707C",
    textDecorationLine: 'none',

  },
  button: {
    width: 350,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  SignupPic: {
    marginBottom: 20,
    marginTop: 90,
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  MerossLogo: {
    marginLeft: 10,
    width: 160,
    height: 50,
    resizeMode: 'contain',
  },
  PowerEyeLogo: {
    width: 200,
    height: 75,
    resizeMode: 'contain',
  },
  signupStatusText: {
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
});
