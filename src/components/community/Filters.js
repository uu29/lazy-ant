import React from 'react';
import {ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Filters({filters}) {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {filters.map((filter, i) => (
        <TouchableOpacity key={i} style={styles.tabContainter}>
          <Text style={styles.text}>{filter}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 4,
  },
  tabContainter: {
    marginVertical: 10,
    marginHorizontal: 3,
    borderRadius: 9,
    backgroundColor: '#D0D4D8',
  },
  text: {
    height: 36,
    lineHeight: 32,
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
