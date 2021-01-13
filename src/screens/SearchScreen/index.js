import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, {Path} from 'react-native-svg';
import styled from '@emotion/native';

function SearchScreen() {
  const [value, onChangeText] = useState('');
  const width = Dimensions.get('window').width;
  const chartData = [
    {
      title: '최근 본 주식',
      rank: ['테슬라', '애플', '삼성전자', 'SK이노베이션', '클라우드플레어'],
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

  const StarBtn = () => (
    <TouchableOpacity>
      <MaterialCommunityIcons size={22} name="star" color="#C1CAD2" />
    </TouchableOpacity>
  );

  const RankNumber = ({number}) => (
    <View style={styles.rankContainer}>
      <Text style={styles.rankNumber}>{number}</Text>
    </View>
  );

  const EyeIcon = ({color_code}) => (
    <Svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.75 6C2.0475 2.7075 5.25 0.375 9 0.375C12.75 0.375 15.9525 2.7075 17.25 6C15.9525 9.2925 12.75 11.625 9 11.625C5.25 11.625 2.0475 9.2925 0.75 6ZM15.615 6C14.3775 3.4725 11.8425 1.875 8.99999 1.875C6.15749 1.875 3.62249 3.4725 2.38499 6C3.62249 8.5275 6.15749 10.125 8.99999 10.125C11.8425 10.125 14.3775 8.5275 15.615 6ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM5.625 6C5.625 4.14 7.14 2.625 9 2.625C10.86 2.625 12.375 4.14 12.375 6C12.375 7.86 10.86 9.375 9 9.375C7.14 9.375 5.625 7.86 5.625 6Z"
        fill={color_code}
      />
    </Svg>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          value={value}
          placeholder="검색하세요"
          onChangeText={(text) => onChangeText(text)}
          style={styles.input}
          width={width - 20}
        />
        <MaterialCommunityIcons
          size={28}
          name="magnify"
          color="#D1D9E2"
          style={styles.magnify}
        />
      </View>
      <View style={styles.chartContainerWrapper}>
        <View style={styles.chartContainer} width={width - 40}>
          <Text style={styles.chartTitle}>최근 본 주식</Text>
          <View style={styles.chartList}>
            <Text style={styles.chartListText}>테슬라</Text>
            <StarBtn />
          </View>
          <View style={styles.chartList}>
            <Text style={styles.chartListText}>테슬라</Text>
            <StarBtn />
          </View>
          <View style={styles.chartList}>
            <Text style={styles.chartListText}>테슬라</Text>
            <StarBtn />
          </View>
          <View style={styles.chartList}>
            <Text style={styles.chartListText}>테슬라</Text>
            <StarBtn />
          </View>
          <View style={styles.chartList}>
            <Text style={styles.chartListText}>테슬라</Text>
            <StarBtn />
          </View>
        </View>
        <View style={styles.chartContainer} width={width - 40}>
          <Text style={styles.chartTitle}>가장 많이 보고 있는 주식</Text>
          <View style={styles.chartList}>
            <RankNumber number={1} />
            <Text style={styles.chartListText}>테슬라</Text>
            <View style={styles.antNumberContainer}>
              <EyeIcon color_code="#F3B557" />
              <AntNumber color_code="#F3B557">835,760 개미</AntNumber>
            </View>
            <StarBtn />
          </View>
          <View style={styles.chartList}>
            <RankNumber number={2} />
            <Text style={styles.chartListText}>테슬라</Text>
            <StarBtn />
          </View>
          <View style={styles.chartList}>
            <RankNumber number={3} />
            <Text style={styles.chartListText}>테슬라</Text>
            <StarBtn />
          </View>
          <View style={styles.chartList}>
            <RankNumber number={4} />
            <Text style={styles.chartListText}>테슬라</Text>
            <StarBtn />
          </View>
          <View style={styles.chartList}>
            <RankNumber number={5} />
            <Text style={styles.chartListText}>테슬라</Text>
            <StarBtn />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  searchContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    // flex: 1,
  },
  input: {
    paddingLeft: 10,
    paddingRight: 40,
    height: 50,
    borderWidth: 2,
    borderColor: '#D1D9E2',
    borderRadius: 12,
    fontSize: 20,
  },
  magnify: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  chartContainerWrapper: {
    flex: 1,
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  chartTitle: {
    fontSize: 14,
    color: '#5C6571',
    alignSelf: 'stretch',
    paddingTop: 14,
    paddingBottom: 8,
  },
  chartList: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E9EC',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  chartListText: {
    flex: 1,
    marginTop: 1,
    fontSize: 16,
    alignSelf: 'stretch',
    color: '#202021',
    paddingVertical: 9,
    marginLeft: 3,
  },
  rankContainer: {
    width: 16,
    height: 16,
    backgroundColor: '#D7DADF',
    borderRadius: 4,
    marginRight: 7,
    marginLeft: 3,
  },
  rankNumber: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  antNumberContainer: {
    flex: 5,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

const AntNumber = styled.Text`
  margin-left: 2px;
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.color_code};
`;

export default SearchScreen;
