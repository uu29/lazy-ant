import React from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';

export default function Board({data}) {
  const width = Dimensions.get('window').width;

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.container} width={width}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.postInfo}>
            <Text style={styles.postInfoText}>{item.regdtime}</Text>
            <Text style={styles.postInfoText}>{item.link}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#E6E9EC',
  },
  title: {
    paddingHorizontal: 3,
    paddingVertical: 3,
    fontSize: 17,
    color: '#000',
    alignSelf: 'stretch',
  },
  postInfo: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  postInfoText: {
    color: '#66696D',
    fontSize: 14,
    marginLeft: 2,
    fontWeight: '300',
  },
});
