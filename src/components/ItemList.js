import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function ItemList() {
  const data = [
    {
      title: '테슬라',
      price: 700.77,
      upanddown: -10.59,
      percentage: -1.66,
    },
    {
      title: '엔비디아',
      price: 700.77,
      upanddown: -10.59,
      percentage: -1.66,
    },
    {
      title: '삼성전자',
      price: 700.77,
      upanddown: -10.59,
      percentage: -1.66,
    },
    {
      title: '네온테크',
      price: 700.77,
      upanddown: -10.59,
      percentage: -1.66,
    },
    {
      title: 'SK하이닉스',
      price: 700.77,
      upanddown: -10.59,
      percentage: -1.66,
    },
    {
      title: 'SK이노베이션',
      price: 700.77,
      upanddown: -10.59,
      percentage: -1.66,
    },
    {
      title: 'LG전자',
      price: 700.77,
      upanddown: -10.59,
      percentage: -1.66,
    },
    {
      title: 'LG전자',
      price: 700.77,
      upanddown: -10.59,
      percentage: -1.66,
    },
    {
      title: 'LG전자',
      price: 700.77,
      upanddown: -10.59,
      percentage: -1.66,
    },
    {
      title: 'LG전자',
      price: 700.77,
      upanddown: -10.59,
      percentage: -1.66,
    },
  ];
  return (
    <FlatList
      data={data}
      renderItem={({item, i}) => (
        <View style={styles.container} key={i}>
          <View>
            <Text style={styles.itemNameText}>{item.title}</Text>
          </View>
          <View>
            <Text style={styles.itemPriceText}>{item.price}</Text>
            <Text style={styles.itemPercentText}>
              {item.upanddown} ({item.percentage}%)
            </Text>
          </View>
        </View>
      )}
    />
  );
}

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
