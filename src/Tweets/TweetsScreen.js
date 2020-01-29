import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import Tweet from './Tweet';

export default function TweetsScreen({ navigation }) {
  const username = navigation.getParam('username');
  const [errorMessage, setErrorMessage] = useState(null);
  const [tweetsList, setTweetsList] = useState([]);

  useEffect(() => {
    firestore().collection('tweets')
      .get()
      .then((snapshot) => {
        const tweets = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setTweetsList(tweets.map((tweet) => {
          const date = tweet.time.toDate();
          return (
            <Tweet
              key={tweet.id}
              name={tweet.username}
              time={date.toTimeString()}
              date={date.toDateString()}
            >
              {tweet.tweet}
            </Tweet>
          );
        }));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  });

  const handlePress = () => {
    navigation.navigate('NewTweet', { username });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text>{`Welcome, ${username}!`}</Text>
        {errorMessage && <Text>{errorMessage}</Text>}
        {tweetsList}
      </ScrollView>
      <View>
        <Button title="New Tweet" onPress={handlePress} />
      </View>
    </View>
  );
}

TweetsScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
