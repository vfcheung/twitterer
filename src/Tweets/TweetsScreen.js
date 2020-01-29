import React from 'react';
import { Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';

export default function TweetsScreen({ navigation }) {
  const username = navigation.getParam('username');

  const handlePress = () => {
    navigation.navigate('NewTweet', { username });
  };

  return (
    <ScrollView>
      <Text>{`Welcome, ${username}!`}</Text>
      <Button title="New Tweet" onPress={handlePress} />
    </ScrollView>
  );
}

TweetsScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
