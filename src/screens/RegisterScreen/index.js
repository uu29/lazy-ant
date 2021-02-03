import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import useInputs from '../../hooks/useInputs';

export default function RegisterScreen({onPress}) {
  const width = Dimensions.get('window').width;

  const initialForm = {
    email: '',
    password: '',
  };
  const [{email, password}, onChangeText, reset] = useInputs(initialForm);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="이메일을 입력해주세요"
        style={styles.textInput}
        width={width - 80}
        onChangeText={(text) => onChangeText('email', text)}
        value={email}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        width={width - 80}
        onChangeText={(text) => onChangeText('password', text)}
        value={password}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginVertical: 5,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#5C6571',
    fontSize: 20,
  },
});
