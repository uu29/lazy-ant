import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Logo from '../../assets/images/logo-big.svg';
import LogoBig from './LogoBig';

export default function LoginScreen({onPress}) {
  return (
    <View style={styles.container}>
      <LogoBig />
      <View style={styles.registerTextContainer}>
        <Text style={styles.registerText}>회원가입</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={onPress}>
        <Text style={styles.btnText}>이메일로 시작하기</Text>
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
  registerTextContainer: {
    marginVertical: 10,
    marginBottom: 70,
  },
  registerText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
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
