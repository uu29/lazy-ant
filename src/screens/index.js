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
const FavoritesStack = createStackNavigator();
const SearchStack = createStackNavigator();
const CommunityStack = createStackNavigator();
const NewsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const FavoritesStackNavigator = () => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen name="Favorites" component={FavoritesScreen} />
  </FavoritesStack.Navigator>
);
const SearchStackNavigator = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={SearchScreen} />
  </SearchStack.Navigator>
);
const CommunityStackNavigator = () => (
  <CommunityStack.Navigator>
    <CommunityStack.Screen name="Community" component={CommunityScreen} />
  </CommunityStack.Navigator>
);
const NewsStackNavigator = () => (
  <NewsStack.Navigator>
    <NewsStack.Screen name="News" component={NewsScreen} />
  </NewsStack.Navigator>
);
const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
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
