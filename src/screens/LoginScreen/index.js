import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function LoginScreen({onPress}) {
  return (
    <View style={styles.container}>
      <View>
        <Text>회원가입</Text>
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
});

export default LoginScreen;
