import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import useInputs from '../../hooks/useInputs';
import {REQUEST_SIGNUP} from '../../reducers/authReducer';

export default function RegisterScreen({onPress}) {
  const width = Dimensions.get('window').width;
  const dispatch = useDispatch();

  const initialForm = {
    email: '',
    password: '',
  };
  const [form, onChangeText, reset] = useInputs(initialForm);
  const {email, password} = form;

  const onPressSubmit = () => {
    dispatch({type: REQUEST_SIGNUP, payload: form});
  };

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
      <TouchableOpacity style={styles.btn} onPress={onPressSubmit}>
        <Text style={styles.btnText}>가입하기</Text>
      </TouchableOpacity>
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
  btn: {
    borderRadius: 2,
    backgroundColor: '#2196EB',
  },
  btnText: {
    fontSize: 20,
    paddingVertical: 14,
    width: 270,
    textAlign: 'center',
    color: '#fff',
  },
});
