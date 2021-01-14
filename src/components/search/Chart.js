import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import styled from '@emotion/native';
import * as Symbols from '../symbols';

function Chart({chartData}) {
  const width = Dimensions.get('window').width;

  return (
    <ScrollView>
      <View style={styles.chartContainerWrapper}>
        {chartData.map((chart, index) => (
          <View style={styles.chartContainer} width={width - 40} key={index}>
            <Text style={styles.chartTitle}>{chart.title}</Text>
            {chart.rank.map((item, index) => (
              <View style={styles.chartList} key={index}>
                {chart.color_code && (
                  <Symbols.RankNumber number={item.ranking} />
                )}
                <Text style={styles.chartListText}>{item.name}</Text>
                {chart.color_code && (
                  <View style={styles.antNumberContainer}>
                    <Symbols.EyeIcon color_code={chart.color_code} />
                    <AntNumber color_code={chart.color_code}>
                      {item.size} 개미
                    </AntNumber>
                  </View>
                )}
                <Symbols.StarBtn />
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
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
    marginTop: 1,
    fontSize: 16,
    alignSelf: 'stretch',
    color: '#202021',
    paddingVertical: 9,
    marginHorizontal: 3,
  },
  antNumberContainer: {
    marginLeft: 5,
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
