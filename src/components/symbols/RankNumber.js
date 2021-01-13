import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RankNumber = ({number}) => (
  <View style={styles.rankContainer}>
    <Text style={styles.rankNumber}>{number}</Text>
  </View>
);

const styles = StyleSheet.create({
  rankContainer: {
    width: 16,
    height: 16,
    backgroundColor: '#D7DADF',
    borderRadius: 4,
    marginRight: 7,
    marginLeft: 3,
  },
  rankNumber: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default RankNumber;
