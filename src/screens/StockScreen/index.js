import React from 'react';
import {View, Text, Button} from 'react-native';

export default function StockScreen({onPress, symbol}) {
  return (
    <View>
      <Text>주가정보 스크린</Text>
      <Text>symbolParams: {JSON.stringify(symbol)}</Text>
      <Button
        title="Go to Home"
        onPress={() => onPress()} // 눌렀을 때 홈으로 이동
      />
    </View>
  );
}
