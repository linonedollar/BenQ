import React from 'react';
import { View,ScrollView, StyleSheet,Image,ImageBackground,TouchableHighlight } from 'react-native';

export default class SettingScreen extends React.Component {
  static navigationOptions = {
    title: '圖片',
  };

  render() {
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <ImageBackground
          source={require('../assets/images/iconfin.jpg')}
          style={{flex: 2,paddingTop:20}} // Set the width and height
         imageStyle={{resizeMode: 'cover'}}>
        </ImageBackground>
        <View style={{flex:1}}>
          <View style={styles.container}>
            <View style={{flex:1}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Information')}>
              <Image
                source={require('../assets/images/icon/menuicon-02.png')}
                style={styles.con} 
              />
            </TouchableHighlight>
            </View>

            <View style={{flex:1}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Process')}>
            <Image
              source={require('../assets/images/icon/menuicon-05.png')}
              style={styles.con} 
            />
            </TouchableHighlight>
            </View>
            
            <View style={{flex:1}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Food')}>
            <Image
              source={require('../assets/images/icon/menuicon-06.png')}
              style={styles.con} 
            />
            </TouchableHighlight>
            </View>
            
        </View>
        </View>
        <View style={{flex:1}}>
          <View style={styles.container}>
            <View style={{flex:1}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Place')}>
            <Image
              source={require('../assets/images/icon/menuicon-07.png')}
              style={styles.con} 
            />
            </TouchableHighlight>
            </View>
            
            <View style={{flex:1}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Place')}>
            <Image
              source={require('../assets/images/icon/menuicon-08.png')}
              style={styles.con} 
            />
            </TouchableHighlight>
            </View>
            
            <View style={{flex:1}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Information')}>
            <Image
              source={require('../assets/images/icon/menuicon-09.png')}
              style={styles.con} 
            />
            </TouchableHighlight>
            </View>
            
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:'#461D87',
    justifyContent:'center',
    alignSelf:'center',
    paddingTop:'1%',
    paddingBottom:'1%',
    height:'15%'
  },
  con:{
    width:'100%',
    height:'100%',
  }
});
