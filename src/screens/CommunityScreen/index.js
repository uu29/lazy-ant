import React from 'react';
import {View, StyleSheet} from 'react-native';
import Filters from '../../components/community/Filters';
import Board from '../../components/community/Board';

function CommunityScreen() {
  const filters = [
    '테슬라',
    '삼성전기',
    'LG화학',
    '클라우드플레어',
    '스노우플레이크',
    'TSMC',
    'ASML',
  ];

  const data = [
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
    {
      title: '아~~ 사고싶다.',
      preview: '',
      link: 'www.clien.com',
      regdtime: '20201224',
    },
  ];

  return (
    <View style={styles.container}>
      <Filters filters={filters} />
      <Board data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CommunityScreen;
