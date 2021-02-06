// 로그인 하자 마자 가장 첫번째로 보이는 스크린. (즐겨찾기, 디테일 스크린이 스택으로 되어있음)
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import DetailScreen from '../DetailScreen';
import {getHeaderTitle} from '../';

const Stack = createStackNavigator();

// 1. 홈 스크린(즐겨찾기 추가한 주식들)
function HomeScreenStack({navigation}) {
  const onPress = (symbol) => {
    navigation.navigate('Root', {
      screen: 'Stocks',
      params: {symbol: symbol},
    });
  };
  return <HomeScreen onPress={onPress} />;
}

// 2. 디테일 스크린(주가정보)
function DetailScreenStack({route, navigation}) {
  const {symbol} = route.params;
  const onPress = () => {
    navigation.navigate('Home');
  };
  return <DetailScreen onPress={onPress} symbol={symbol} />;
}

// 3. 만든 스크린을 하나의 함수에 묶어 루트 스크린으로 내보낸다.
export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreenStack}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          cardStyle: {backgroundColor: 'white'},
        })}
      />
      <Stack.Screen
        name="Stocks"
        component={DetailScreenStack}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          cardStyle: {backgroundColor: 'white'},
        })}
      />
    </Stack.Navigator>
  );
}
