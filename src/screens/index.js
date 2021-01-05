import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FavoritesScreen from './FavoritesScreen';
import SearchScreen from './SearchScreen';
import CommunityScreen from './CommunityScreen';
import NewsScreen from './NewsScreen';
import MyinfoScreen from './MyinfoScreen';

const FavoritesStack = createStackNavigator(
  {
    FavoritesScreen, // 스크린에서 보여줄 컴포넌트
  },
  // if you need.
  // recommend custom header
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: '즐겨찾기', // 헤더 디폴트 타이틀
    }),
  },
);

const SearchStack = createStackNavigator(
  {
    SearchScreen,
  },
  // if you need.
  // recommend custom header
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: '검색',
    }),
  },
);

const CommunityStack = createStackNavigator(
  {
    CommunityScreen,
  },
  // if you need.
  // recommend custom header
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: '커뮤니티',
    }),
  },
);

const NewsStack = createStackNavigator(
  {
    NewsScreen,
  },
  // if you need.
  // recommend custom header
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: '뉴스',
    }),
  },
);

const MyinfoStack = createStackNavigator(
  {
    MyinfoScreen,
  },
  // if you need.
  // recommend custom header
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: '내정보',
    }),
  },
);

// 탭 네비게이션을 위한 객체 생성
const TabNavigator = createBottomTabNavigator(
  {
    // 각 스크린에 생성해주었던 Stack을 할당한다.
    Favorites: FavoritesStack,
    Search: SearchStack,
    Community: CommunityStack,
    News: NewsStack,
    Myinfo: MyinfoStack,
  },
  {
    // 탭네비게이션 옵션 설정(아이콘, 컬러 등)
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, color, size}) => {
        const {
          state: {routeName},
        } = navigation;

        let iconName;
        // focused: boolean, 클릭했는지 여부

        switch (routeName) {
          case 'Search':
            iconName = 'magnify';
            break;
          case 'Community':
            iconName = 'forum-outline';
            break;
          case 'News':
            iconName = 'view-dashboard-outline';
            break;
          case 'Myinfo':
            iconName = 'account-circle-outline';
            break;
          default:
            iconName = 'star-outline';
        }
        return (
          <MaterialCommunityIcons size={size} name={iconName} color={color} />
        );
      },
    }),
    lazy: false,
    tabBarOptions: {
      activeTintColor: '#1B2228', // 활성화 되었을 때 색
      inactiveTintColor: '#C7CDD3', // 비활성화 색
      showLabel: false, // 텍스트 숨기기
    },
  },
);

const AppStack = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
});

export default createAppContainer(AppStack);
