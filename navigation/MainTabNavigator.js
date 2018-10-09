import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import IntimateScreen from '../screens/IntimateScreen';
import SettingsScreen from '../screens/SettingsScreen';

import InformationScreen from '../screens/Information';
import ProcessScreen from '../screens/Process';
import ActivityScreen from '../screens/Activity';
import PlaceScreen from '../screens/Place'
import FoodScreen from '../screens/Food';
import AroundScreen from '../screens/Around'
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Information: InformationScreen,
  Process: ProcessScreen,
  Activity: ActivityScreen,
  Place:PlaceScreen,
  Food:FoodScreen,
  Around:AroundScreen,
  /*前面是名稱 後面 是連結頁面 */
});

HomeStack.navigationOptions = {
  tabBarLabel: '首頁',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: IntimateScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: '貼心叮嚀',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
