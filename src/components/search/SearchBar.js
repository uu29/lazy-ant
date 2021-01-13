import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function SearchBar({value, onChangeText}) {
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.searchContainer}>
      <TextInput
        value={value}
        placeholder="검색하세요"
        onChangeText={(text) => onChangeText(text)}
        style={styles.input}
        width={width - 20}
      />
      <MaterialCommunityIcons
        size={28}
        name="magnify"
        color="#D1D9E2"
        style={styles.magnify}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    paddingLeft: 10,
    paddingRight: 40,
    height: 50,
    borderWidth: 2,
    borderColor: '#D1D9E2',
    borderRadius: 12,
    fontSize: 20,
  },
  magnify: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default SearchBar;
