import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import styled from '@emotion/native';
import * as Symbols from '../symbols';

function Chart({chartData}) {
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.chartContainerWrapper}>
      <View style={styles.chartContainer} width={width - 40}>
        <Text style={styles.chartTitle}>{chartData.title}</Text>
        {chartData.rank.map((item, i) => (
          <View style={styles.chartList} key={i}>
            {chartData.color_code && (
              <Symbols.RankNumber number={item.ranking} />
            )}
            <Text style={styles.chartListText}>{item.name}</Text>
            {chartData.color_code && (
              <View style={styles.antNumberContainer}>
                <Symbols.EyeIcon color_code={chartData.color_code} />
                <AntNumber color_code={chartData.color_code}>
                  {item.size} 개미
                </AntNumber>
              </View>
            )}
            <Symbols.StarBtn color_code={chartData.color_code} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default Chart;
