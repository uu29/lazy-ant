import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import IntroScreen from './IntroScreen';
import RegisterScreen from './RegisterScreen';
import TabsScreen from './TabsScreen';

export const headerTitleStyle = {
  fontSize: 18,
  textAlign: 'center', // 안드로이드 디폴트는 좌측정렬이기 때문에
};

export const getHeaderTitle = (route) => {
  const {name, params} = route;
  if (params && params.symbol) console.log(params.symbol);
  switch (name) {
    case 'Home':
      return '즐겨찾기';
    case 'Register':
      return '회원가입';
    default:
      return '알수없음';
  }
};

const Stack = createStackNavigator();

function LoginScreenStack({navigation}) {
  const onPress = () => {
    navigation.navigate('Register', {
      screen: 'Register',
    });
  };
  return <IntroScreen onPress={onPress} />;
}

function RegisterScreenStack({navigation}) {
  const onPress = (symbol) => {
    navigation.navigate('App', {
      screen: 'Apps',
    });
  };
  return <RegisterScreen onPress={onPress} />;
}

function Root() {
  const dispatch = useDispatch();
  const {
    auth: {is_logged_in, error},
  } = useSelector(({auth}) => ({
    auth: auth,
  }));
  return (
    <NavigationContainer>
      {is_logged_in ? (
        <TabsScreen />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            headerMode="none"
            component={LoginScreenStack}
            options={({route}) => ({
              headerShown: false,
              cardStyle: {backgroundColor: 'white'},
            })}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreenStack}
            options={({route}) => ({
              headerTitle: getHeaderTitle(route),
              headerTitleStyle: headerTitleStyle,
              cardStyle: {backgroundColor: 'white'},
            })}
          />
          <Stack.Screen
            name="Apps"
            component={TabsScreen}
            options={({route}) => ({
              headerTitle: getHeaderTitle(route),
              cardStyle: {backgroundColor: 'white'},
            })}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Root;
