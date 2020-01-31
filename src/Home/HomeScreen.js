import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Tweets', { username });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TextInput
          autoFocus
          placeholder="Enter your name"
          onChangeText={(name) => setUsername(name)}
          value={username}
        />
      </View>
      <View>
        <Button
          title="Start tweeting!"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
