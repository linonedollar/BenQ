import React from 'react';
import { ScrollView,Image, StyleSheet,View } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { Card,Text} from 'react-native-elements';

const FirstRoute = () => (
  <ScrollView style={[styles.container, { backgroundColor: '#ABDCFF' }]}>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-09.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              小丑互動～樂無趣～小朋友最愛的都在這裡喔！
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-10.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              規則：
          </Text>
          <Text>{`現場報名，一大人一小孩為一組，將綁在一起的球繞過三角錐回到原點及過關！
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-11.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              規則：
          </Text>
          <Text>{`現場報名，兩大人一小孩為一組，大人利用道具帆布將小孩送至終點及過關！
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-12.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              參賽小朋友均可獲得零食歡樂包唷！
          </Text>
          </Card>
  </ScrollView>
);
const SecondRoute = () => (
  <ScrollView style={[styles.container, { backgroundColor: '#ABDCFF' }]}>
  <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-13.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              遊戲玩法：
          </Text>
          <Text>{`1.每人2次機會
2.將海棉棒成功丟進圓圈中即過關
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-14.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              遊戲玩法：
          </Text>
          <Text>{`1.每人2次機會
2.距離一公尺，發球讓落在1個規定範圍內即過關。
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-15.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              遊戲玩法：
          </Text>
          <Text>{`1.每人二球機會
2.將一顆球投進籃框即可過關
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-16.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              遊戲玩法：
          </Text>
          <Text>{`1.每人二球機會
2.將一顆球踢進球門內即可過關
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-17.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              遊戲玩法：
          </Text>
          <Text>{`1.每人三球機會
2.擊落任一目標物，即過關
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-18.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              遊戲玩法：
          </Text>
          <Text>{`1.每人3次機會
2.將手上呼拉圈套中不倒翁套中一個即過關
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-19.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              遊戲玩法：
          </Text>
          <Text>{`1.限時30秒
2.設法將球引至出口即過關
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-20.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              遊戲玩法：
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-21.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              遊戲玩法：
          </Text>
          
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-22.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              遊戲玩法：
          </Text>
          
          </Card>
  </ScrollView>
);
const ThirdRoute = () => (
  <ScrollView style={[styles.container, { backgroundColor: '#ABDCFF' }]}>
  <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}}
          image={require('../assets/images/titlebg.png')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              競賽規則：
          </Text>
          <Text>{`七大隊各派出4位主管參賽(至少1位女性主管)
四位主管都必須成功通過四關，計時賽
1.第一關，跳繩累計20下
2.第二關，搖呼拉圈累計20圈
3.第三關，彈跳棒累計跳20下或使用羽毛球拍累計運送20杯水，距離8公尺
4.第四關，於階梯板上完成伏地挺身20下後，使用弓箭擊中靶上的“２０你讚”
              `}
          </Text>
          </Card>
  </ScrollView>
);

export default class TabViewExample extends React.Component {
  static navigationOptions = {
    title: '周邊設施',
  };
  state = {
    index: 0,
    routes: [
      { key: 'first', title: '愛20' },
      { key: 'second', title: '享20' },
      { key: 'third', title: '動20' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
        })}
        onIndexChange={index => this.setState({ index })}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    shadowOffset:{width:20,height:10,},
    shadowColor:'black',
    shadowOpacity:2.0,
  },
  image: {
    flex:1,
  },
});
