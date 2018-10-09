import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card,Text,Button} from 'react-native-elements';
import { List, ListItem } from 'react-native-elements';

export default class Information extends React.Component {
  static navigationOptions = {
    title: '活動流程',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
            <List>
              {
                list.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    subtitle={item.time}
                    leftIcon={{name: item.icon}}
                  />
                ))
              }
            </List>
      </ScrollView>
    );
  }
}
const list = [
  {
    title: '同仁報到',
    time:'09:00-09:30',
    icon: 'av-timer'
  },
  {
    title: '20大進擊',
    time:'09:40-10:00',
    icon: 'flight-takeoff'
  },
  {
    title: '開幕表演',
    time:'10:00-10:05',
    icon: 'av-timer'
  },
  {
    title: '長官致詞、點燃聖火',
    time:'10:05-10:10',
    icon: 'flight-takeoff'
  },
  {
    title: '20暖起來',
    time:'10:10-10:15',
    icon: 'av-timer'
  },
  {
    title: '讚20-主管團體賽',
    time:'10:15-14:20',
    icon: 'av-timer'
  },
  {
    title: '玩20-同仁團體競賽',
    time:'10:15-14:20',
    icon: 'av-timer'
  },
  {
    title: '愛20-親子互動遊戲',
    time:'10:15-14:20',
    icon: 'av-timer'
  },
  {
    title: '享20-闖關、ＤＩＹ手作區',
    time:'10:15-14:20',
    icon: 'av-timer'
  },
  {
    title: '動20-歡樂氣墊王國',
    time:'10:15-14:20',
    icon: 'av-timer'
  },
  {
    title: '瘋20-美食團購瘋',
    time:'10:15-14:20',
    icon: 'av-timer'
  },
  {
    title: '頒獎活動',
    time:'14:20-14:30',
    icon: 'av-timer'
  },
  {
    title: '賦歸',
    time:'14:30',
    icon: 'av-timer'
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
