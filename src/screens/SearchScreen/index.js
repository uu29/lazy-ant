import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function SearchScreen() {
  const [value, onChangeText] = useState('검색하세요');
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.topTextContainer}>
        <Text style={styles.topText}>
          “가장 비관적일 때가 가장 좋은 매수의 타이밍이다.”
        </Text>
        <Text style={styles.topTextAuthor}>존 템플턴 경</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          value={value}
          onChangeText={(text) => onChangeText(text)}
          style={styles.input}
          width={width * 0.9}
        />
        <MaterialCommunityIcons
          size={28}
          name="magnify"
          color="#D1D9E2"
          style={styles.magnify}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text>실시간 검색어</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  topTextContainer: {
    flex: 3,
    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 16,
    fontWeight: '500',
  },
  topTextAuthor: {
    paddingTop: 20,
    fontSize: 13,
    fontWeight: '300',
  },
  searchContainer: {
    flex: 3,
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
  chartContainer: {
    flex: 1,
  },
});

export default SearchScreen;
