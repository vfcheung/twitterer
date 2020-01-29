import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function TweetsScreen({ navigation }) {
  const username = navigation.getParam('username');
  return (
    <View>
      <Text>{`Welcome, ${username}!`}</Text>
    </View>
  );
}

TweetsScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
