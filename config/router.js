
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import { TabNavigator } from 'react-navigation';

export const Tabs = TabNavigator ({
  Feed:{
      screen: Feed,
  },
  Me:{
      screen: Me,
  },
});