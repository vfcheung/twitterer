import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameContainer: {
    flex: 1,
  },
});

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Tweets', { username });
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
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
