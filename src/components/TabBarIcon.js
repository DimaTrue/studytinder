import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    const { name, focused } = this.props;
    return (
      <Icon
        name={name}
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
