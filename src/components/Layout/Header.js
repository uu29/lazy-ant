import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>즐겨찾기</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 92,
    paddingTop: 36,
    justifyContent: 'center',
    borderBottomColor: '#E6E9EC',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Header;
