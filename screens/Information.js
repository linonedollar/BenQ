import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card,Text,Button} from 'react-native-elements';

export default class Information extends React.Component {
  static navigationOptions = {
    title: '活動資訊',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card
          title='活動資訊'>
          <Text style={{marginBottom: 10}}>
            {`明基材料20歲了！
我們一起克服困難、過關斬將，
我們一起攜手共進、創造榮耀，
我們一起投入公益、傳遞愛心。
在一起的每一秒締造了這光榮的一刻。`}
          </Text>
          <Button
            icon={{name: 'list'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='感謝' />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
