import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FavoritesScreen from './FavoritesScreen';
import SearchScreen from './SearchScreen';
import CommunityScreen from './CommunityScreen';
import NewsScreen from './NewsScreen';
import ProfileScreen from './ProfileScreen';
import StockInformation from './StockInformation';

const Tab = createBottomTabNavigator();
const FavoritesStack = createStackNavigator();
const SearchStack = createStackNavigator();
const CommunityStack = createStackNavigator();
const NewsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const StockInformationStack = createStackNavigator();

const headerTitleStyle = {
  fontSize: 18,
  textAlign: 'center', // 안드로이드 디폴트는 좌측정렬이기 때문에
};

const FavoritesStackNavigator = () => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        headerTitleStyle: headerTitleStyle,
        cardStyle: {backgroundColor: 'white'},
      }}
      
    />
  </FavoritesStack.Navigator>
);
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
const StockInformationStackNavigator = () => (
  <StockInformationStack.Navigator>
    <StockInformationStack
      name="Stock Information"
      component={StockInformation}
      options={{
        headerTitleStyle: headerTitleStyle,
        cardStyle: {backgroundColor: 'white'},
      }}
    />
  </StockInformationStack.Navigator>
);

function AppStack({navigation}) {
  const navigateToStockInfo = () => {
    navigation.push('StockInformationStackNavigator');
  };
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
        <Tab.Screen name="Favorites" component={FavoritesStackNavigator} />
        <Tab.Screen name="Search" component={SearchStackNavigator} />
        <Tab.Screen name="Community" component={CommunityStackNavigator} />
        <Tab.Screen name="News" component={NewsStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
