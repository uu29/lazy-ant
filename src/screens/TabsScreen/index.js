// 실질적 콘텐트가 들어갈 탭 네비게이터들
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from '../SearchScreen';
import CommunityScreen from '../CommunityScreen';
import NewsScreen from '../NewsScreen';
import ProfileScreen from '../ProfileScreen';
import RootScreen from '../RootScreen';
import {headerTitleStyle} from '..';

const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();
const CommunityStack = createStackNavigator();
const NewsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

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

export default function Tabs() {
  return (
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
      <Tab.Screen name="Root" component={RootScreen} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="Community" component={CommunityStackNavigator} />
      <Tab.Screen name="News" component={NewsStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}
