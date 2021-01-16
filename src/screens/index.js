import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import CommunityScreen from './CommunityScreen';
import NewsScreen from './NewsScreen';
import ProfileScreen from './ProfileScreen';
import StockScreen from './StockScreen';

const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();
const CommunityStack = createStackNavigator();
const NewsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const headerTitleStyle = {
  fontSize: 18,
  textAlign: 'center', // 안드로이드 디폴트는 좌측정렬이기 때문에
};

function getHeaderTitle(route) {
  const {name} = route;
  const routeName = getFocusedRouteNameFromRoute(name) ?? 'Hello';
  console.log(routeName);

  switch (routeName) {
    case 'Home':
      return 'Favorites';
    default:
      return '알수없음';
  }
}

// 1. 준비: StackNavigator 객체를 생성한다.
const Stack = createStackNavigator();

// 2. 각각의 필요한 스택 스크린을 만든다. - 홈, 주식정보
function StocksScreen({route, navigation}) {
  const {symbol} = route.params;
  // 주식 정보 스크린
  const onPress = () => {
    navigation.navigate('Home');
  };
  return <StockScreen onPress={onPress} symbol={symbol} />;
}

function HomeScreenStackScreen({navigation}) {
  const onPress = (symbol) => {
    navigation.navigate('Root', {
      screen: 'Stocks',
      params: {symbol: symbol},
    });
  };
  return <HomeScreen onPress={onPress} />;
}

// 3. 만든 스크린을 하나의 함수에 묶어 스택네비게이터로 감싼다.
function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreenStackScreen}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          cardStyle: {backgroundColor: 'white'},
        })}
      />
      <Stack.Screen
        name="Stocks"
        component={StocksScreen}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          cardStyle: {backgroundColor: 'white'},
        })}
      />
    </Stack.Navigator>
  );
}

const SearchStackNavigator = () => (
  <SearchStack.Navigator headerMode="none">
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        cardStyle: {backgroundColor: 'white'},
      }}
    />
  </SearchStack.Navigator>
);
const CommunityStackNavigator = () => (
  <CommunityStack.Navigator>
    <CommunityStack.Screen
      name="Community"
      component={CommunityScreen}
      options={{
        headerTitleStyle: headerTitleStyle,
        cardStyle: {backgroundColor: 'white'},
      }}
    />
  </CommunityStack.Navigator>
);
const NewsStackNavigator = () => (
  <NewsStack.Navigator>
    <NewsStack.Screen
      name="News"
      component={NewsScreen}
      options={{
        headerTitleStyle: headerTitleStyle,
        cardStyle: {backgroundColor: 'white'},
      }}
    />
  </NewsStack.Navigator>
);
const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerTitleStyle: headerTitleStyle,
        cardStyle: {backgroundColor: 'white'},
      }}
    />
  </ProfileStack.Navigator>
);

function AppStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            // focused: bool, 클릭했는지 여부

            switch (route.name) {
              case 'Search':
                iconName = 'magnify';
                break;
              case 'Community':
                iconName = 'forum-outline';
                break;
              case 'News':
                iconName = 'view-dashboard-outline';
                break;
              case 'Profile':
                iconName = 'account-circle-outline';
                break;
              default:
                iconName = 'star-outline';
            }
            return (
              <MaterialCommunityIcons
                size={size}
                name={iconName}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1B2228', // 활성화 되었을 때 색
          inactiveTintColor: '#C7CDD3', // 비활성화 색
          showLabel: false, // 텍스트 숨기기
        }}>
        <Tab.Screen name="Root" component={Root} />
        <Tab.Screen name="Search" component={SearchStackNavigator} />
        <Tab.Screen name="Community" component={CommunityStackNavigator} />
        <Tab.Screen name="News" component={NewsStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
