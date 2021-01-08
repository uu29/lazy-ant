import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ItemList from '../../components/ItemList';
import {getHistoricalData} from '../../reducers/favoritesReducer';

function FavoritesScreen() {
  const dispatch = useDispatch();
  const {
    favorites: {my_favorites},
  } = useSelector(({favorites}) => ({
    favorites: favorites,
  }));
  console.log(my_favorites[0]);
  useEffect(() => {
    dispatch(getHistoricalData(my_favorites[0]));
  }, []);

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
