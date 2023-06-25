import { View, Text, TextInput } from "react-native";
import { useEffect } from "react";

import { styles } from "./styles";

import { useAppSelector, useAppDispatch } from "../../hooks/store";
import { setInputValue } from "../../store/auth-input/authInputSlice";

const AuthInputComponent = ({
  initialValue,
  isValid,
  onInputChange,
  required,
  id,
  email,
  password,
  max,
  min,
  label,
  errorText,
  ...rest
}) => {
  const dispatch = useAppDispatch();
  const inputState = useAppSelector((state) => state.authInput);

  const onHandleEmailChange = (text) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if (required && text.trim().length === 0) isValid = false;
    if (email && !emailRegex.test(text.toLowerCase())) isValid = false;
    if (max && text.length > max) isValid = false;
    if (min !== null && text.length < min) isValid = false;

    dispatch(
      setInputValue({
        id,
        value: text,
        isValid: isValid,
      })
    );
  };

  useEffect(() => {
    onInputChange(id, inputState.value, inputState.isValid);
  }, [inputState, onInputChange, id]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={
          id === "email" ? inputState.value.email : inputState.value.password
        }
        onChangeText={id === "email" ? onHandleEmailChange : () => null}
        {...rest}
      />
      {!inputState.isValid && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

export default AuthInputComponent;
