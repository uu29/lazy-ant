import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StarBtn = () => (
  <TouchableOpacity style={styles.container}>
    <MaterialCommunityIcons size={22} name="star" color="#C1CAD2" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default StarBtn;
