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

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
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
          <MaterialCommunityIcons size={size} name={iconName} color={color} />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: '#1B2228', // 활성화 되었을 때 색
      inactiveTintColor: '#C7CDD3', // 비활성화 색
      showLabel: false, // 텍스트 숨기기
    }}>
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Community" component={CommunityScreen} />
    <Tab.Screen name="News" component={NewsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Stack" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
