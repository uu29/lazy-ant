import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ItemList from '../../components/ItemList';
import {FETCH_HISTORICAL_DATA} from '../../reducers/favoritesReducer';

function FavoritesScreen() {
  const dispatch = useDispatch();
  const {
    favorites: {my_favorites},
  } = useSelector(({favorites}) => ({
    favorites: favorites,
  }));

  useEffect(() => {
    dispatch({type: FETCH_HISTORICAL_DATA, myFavorites: my_favorites});
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
