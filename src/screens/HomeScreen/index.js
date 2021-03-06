import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ItemList from '../../components/favorites/ItemList';
import {FETCH_SYMBOL_PROFILES} from '../../reducers/favoritesReducer';

export default function Home({onPress}) {
  const dispatch = useDispatch();
  const {
    favorites: {is_fetching, my_favorites, symbol_profiles},
  } = useSelector(({favorites}) => ({
    favorites: favorites,
  }));

  useEffect(() => {
    dispatch({type: FETCH_SYMBOL_PROFILES, myFavorites: my_favorites});
  }, []);

  return (
    <View style={styles.container}>
      {is_fetching ? (
        <Text>데이터를 불러오는 중입니다.</Text>
      ) : (
        <ItemList symbol_profiles={symbol_profiles} onPress={onPress} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
