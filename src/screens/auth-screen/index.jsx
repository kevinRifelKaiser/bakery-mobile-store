import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import { validateEmail } from "../../utils/functions";

import useAuthActions from "../../hooks/useAuthActions";
// import donut from "../assets/donut.png";

const AuthScreen = () => {
  const [register, setRegister] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPasword] = useState("");
  const [formIsValid, setFormValid] = useState(false);
  const { onHandleSignUp, onHandleLogIn } = useAuthActions();

  const handleSignUp = () => {
    if (formIsValid) {
      onHandleSignUp({ email: emailValue, password: passwordValue });
      setEmailValue("");
      setPasswordValue("");
      setConfirmPasword("");
      setFormValid(false);
    } else if (passwordValue !== confirmPassword) {
      Alert.alert("Passwords don't match", "Plese rewrite your passwords", [
        { text: "Ok" },
      ]);
    } else {
      Alert.alert(
        "Formulario inválido",
        "Ingresa un email y contraseña válidos",
        [{ text: "Ok" }]
      );
    }
  };

  const handleLogIn = () => {
    if (formIsValid) {
      onHandleLogIn({ email: emailValue, password: passwordValue });
      setEmailValue("");
      setPasswordValue("");
      setFormValid(false);
    } else {
      Alert.alert(
        "Formulario inválido",
        "Ingresa un email y contraseña válidos",
        [{ text: "Ok" }]
      );
    }
  };

  useEffect(() => {
    console.log({ emailValue, passwordValue, confirmPassword });
    const validatePassword = () => {
      let passValid = false;
      if (register) {
        passValid = passwordValue === confirmPassword;
      } else {
        passValid = true;
      }
      return passValid;
    };
    const isValid =
      validateEmail(emailValue, "required", 20, 8) && validatePassword;
    setFormValid(isValid);
  }, [emailValue, passwordValue, confirmPassword]);

  const handleRegisterScreen = () => {
    setRegister(!register);
  };

  return (
    <KeyboardAvoidingView
      style={{ ...styles.mainContainer, paddingTop: StatusBar.currentHeight }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={50}>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            {register ? (
              <Text style={styles.title}>Create an account</Text>
            ) : (
              <Text style={styles.title}>Log in</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Your email</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => setEmailValue(text)}
              value={emailValue}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(text) => setPasswordValue(text)}
              value={passwordValue}
            />
          </View>
          {register ? (
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirm password</Text>
              <TextInput
                style={styles.input}
                keyboardType="default"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(text) => setConfirmPasword(text)}
                value={confirmPassword}
              />
            </View>
          ) : null}
          <View>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={register ? handleSignUp : handleLogIn}>
              <Text style={styles.registerButtonText}>
                {register ? "Register" : "Log in"}
              </Text>
            </TouchableOpacity>
            <View style={styles.textRegisterContainer}>
              <Text style={styles.textRegister}>
                {register
                  ? "Already have an account? You can "
                  : "You don't have an account? you can "}
              </Text>
              <TouchableHighlight onPress={handleRegisterScreen}>
                <Text style={styles.pressableText}>
                  {register ? "login here." : "create one here."}
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
