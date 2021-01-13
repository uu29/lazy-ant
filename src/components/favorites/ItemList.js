import React from 'react';
import styled from '@emotion/native';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function ItemList({symbol_profiles}) {
  return (
    <FlatList
      data={symbol_profiles}
      renderItem={({item}) => (
        <View style={styles.container}>
          <View>
            <Text style={styles.itemNameText}>{item.shortName}</Text>
          </View>
          <View>
            <Text style={styles.itemPriceText}>{item.raw}</Text>
            <Percent
              isNegative={Math.sign(item.rMarketChange) === -1 ? true : false}>
              {item.rMarketChange} ({item.rMarketChangePercent})
            </Percent>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const Percent = styled.Text`
  padding-top: 6px,
  text-align: 'right',
  font-size: 15px,
  font-weight: 500,
  color: ${(props) => (props.isNegative ? '#2090F8' : '#DF281D')}
`;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    height: 86,
    shadowColor: '#f1f2f3',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 18.95,
    elevation: 1,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: '#F2F3F4',
    borderWidth: 1,
  },
  itemNameText: {
    fontSize: 20,
  },
  itemPriceText: {
    textAlign: 'right',
    fontSize: 28,
    fontWeight: '700',
  },
  itemPercentText: {
    paddingTop: 6,
    textAlign: 'right',
    fontSize: 15,
    color: '#2090F8',
    fontWeight: '500',
  },
});
