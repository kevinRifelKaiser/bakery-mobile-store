import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import useAuthActions from "../../hooks/useAuthActions";

const Login = () => {
  const { onHandleSignUp } = useAuthActions();

  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("Ao753adfasfd62");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login page</Text>
      <TouchableOpacity
        onPress={() => onHandleSignUp({ email, password })}
        style={styles.signUpButton}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
