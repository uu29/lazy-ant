import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ItemList from '../../components/ItemList';

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <ItemList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoritesScreen;
