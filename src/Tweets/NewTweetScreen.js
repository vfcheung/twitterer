import React, { useState } from 'react';
import {
  View, Button, Text, ActivityIndicator,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import firestore from '@react-native-firebase/firestore';

export default function NewTweetScreen({ navigation }) {
  const username = navigation.getParam('username');
  const [tweet, setTweet] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const tweetRecord = {
      username,
      tweet,
      time: firestore.Timestamp.now(),
    };
    firestore().collection('tweets')
      .doc()
      .set(tweetRecord)
      .then(() => {
        setLoading(false);
        navigation.navigate('Tweets');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <View>
      {errorMessage && <Text>{errorMessage}</Text>}
      <TextInput
        placeholder="Tweet"
        multiline
        value={tweet}
        onChangeText={(content) => setTweet(content)}
      />
      <Button disabled={loading} title="Tweet!" onPress={handleSubmit} />
      {loading && <ActivityIndicator />}
    </View>
  );
}

NewTweetScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
