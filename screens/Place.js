import React from 'react';
import { View, StyleSheet,ImageBackground } from 'react-native';

export default class Information extends React.Component {
  static navigationOptions = {
    title: '活動場地',
  };

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
          source={require('../assets/images/outplace.jpg')}
          style={{flex: 1,paddingTop:20}} // Set the width and height
         imageStyle={{resizeMode: 'contain'}}>
        </ImageBackground>
      </View>
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
