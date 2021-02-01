import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SvgUri, SvgXml} from 'react-native-svg';
// import Logo from '../../assets/images/logo-big.svg';
import LogoBig from './LogoBig';

function LoginScreen({onPress}) {
  return (
    <View style={styles.container}>
      <LogoBig />
      <View style={styles.registerTextContainer}>
        <Text style={styles.registerText}>회원가입</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnText}>이메일로 시작하기</Text>
      </View>
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
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 2,
  },
  btnText: {
    fontSize: 20,
    paddingVertical: 14,
    width: 270,
    textAlign: 'center',
  },
});

export default LoginScreen;
