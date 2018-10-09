import React from 'react';
import { ScrollView,AppRegistry, StyleSheet,Platform,View } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import { Card,Text,Button} from 'react-native-elements';

const FirstRoute = () => (
  <ScrollView style={[styles.container, { backgroundColor: '#ABDCFF' }]}>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-01.jpg')}>
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
const SecondRoute = () => (
  <ScrollView style={[styles.container, { backgroundColor: '#ABDCFF' }]}>

          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-04.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              競賽規則：
          </Text>
          <Text>{`每個隊20人，女生至少6名，五人一棒，共四棒
接力計時賽，現場抽隊伍順序
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-05.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              競賽規則：
          </Text>
          <Text>{`1.限時90秒，每隊20人（含甩繩者），女生至少6名，計算時間內成功跳躍次數。
2.依照總成功次數，決定勝負，現場抽隊伍順序。
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-06.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              競賽規則：
          </Text>
          <Text>{`1.20人，女生至少6名並肩裹足前進，衝向終點
2.採計時賽，現場抽隊伍順序        
              `}
          </Text>
          </Card>
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-07.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              競賽規則：
          </Text>
          <Text>{`1.20人一隊(女生至少6名)每場次5分鐘，時間到時，依內場人員背號加總，多者為勝，單淘汰制。
2.七區隊＋主管1隊，共8隊，現場抽隊伍順序。`}
          </Text>
          </Card>
          
          <Card containerStyle={{
    shadowOffset:{width:4.5,height:4.5,},
    shadowColor:'#9d9d9d',
    shadowOpacity:0.8,}} style={styles.container} imageProps={{resizeMode:'contain'}}
          image={require('../assets/images/Banner/Activity-08.jpg')}>
          <Text style={{fontSize:18,color:"blue",fontWeight:"bold",textAlign:"center"}}>
              競賽規則：
          </Text>
          <Text>{`1.20人一隊(女生至少6名)，3局2勝，每局1分鐘，單淘汰制。
2.七區隊＋主管1隊，共8隊，現場抽隊伍順序。`}
          </Text>
          </Card>
  </ScrollView>
);


export default class TabViewExample extends React.Component {
  static navigationOptions = {
    title: '活動資訊',
  };
  state = {
    index: 0,
    routes: [
      { key: 'first', title: '讚20' },
      { key: 'second', title: '玩20' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
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
});
