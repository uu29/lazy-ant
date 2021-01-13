import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StarBtn = ({color_code}) => (
  <TouchableOpacity>
    <MaterialCommunityIcons size={22} name="star" color={color_code} />
  </TouchableOpacity>
);

export default StarBtn;
