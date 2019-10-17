import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TopPicksScreen from '../screens/TopPicksScreen';

const TopPicksStack = createStackNavigator(
  {
    TopPicks: TopPicksScreen,
  },
  {
    headerMode: 'none',
  },
);

TopPicksStack.navigationOptions = {
  tabBarLabel: 'TopPicks',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-eye" />,
};

const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
  },
  {
    headerMode: 'none',
  },
);

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-notifications" />
  ),
};

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    headerMode: 'none',
  },
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-star" />,
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
  },
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
};

const AppNav = createBottomTabNavigator({
  Home: { screen: HomeStack },
  TopPicksStack: { screen: TopPicksStack },
  MessagesStack: { screen: MessagesStack },
  ProfileStack: { screen: ProfileStack },
});

export default createAppContainer(AppNav);
