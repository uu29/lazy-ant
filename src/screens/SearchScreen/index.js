import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import SearchBar from '../../components/search/SearchBar';
import Chart from '../../components/search/Chart';

function SearchScreen() {
  const [value, onChangeText] = useState('');
  const chartData = [
    {
      title: '최근 본 주식',
      rank: [
        {name: '테슬라', ranking: '1'},
        {name: '애플', ranking: '2'},
        {name: '삼성전자', ranking: '3'},
        {name: 'SK이노베이션', ranking: '4'},
        {name: '삼성전기', ranking: '5'},
      ],
    },
    {
      title: '가장 많이 보고있는 주식',
      rank: [
        {name: '테슬라', ranking: '1', size: 758044},
        {name: '애플', ranking: '2', size: 559221},
        {name: '줌 커뮤니케이션즈', ranking: '3', size: 316990},
        {name: '페이스북', ranking: '4', size: 92357},
        {name: '아마존닷컴', ranking: '5', size: 86091},
      ],
      color_code: '#EAA338',
    },
    {
      title: '가장 사고 싶어 하는 주식',
      rank: [
        {name: '테슬라', ranking: '1', size: 758044},
        {name: '애플', ranking: '2', size: 559221},
        {name: '줌 커뮤니케이션즈', ranking: '3', size: 316990},
        {name: '페이스북', ranking: '4', size: 92357},
        {name: '아마존닷컴', ranking: '5', size: 86091},
      ],
      color_code: '#F2655D',
    },
    {
      title: '가장 팔고 싶어 하는 주식',
      rank: [
        {name: '테슬라', ranking: '1', size: 758044},
        {name: '애플', ranking: '2', size: 559221},
        {name: '줌 커뮤니케이션즈', ranking: '3', size: 316990},
        {name: '페이스북', ranking: '4', size: 92357},
        {name: '아마존닷컴', ranking: '5', size: 86091},
      ],
      color_code: '#409FF5',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={value} onChangeText={onChangeText} />
      <Chart chartData={chartData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default SearchScreen;
