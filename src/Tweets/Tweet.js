import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  contentContainer: {
    paddingTop: 20,
  },
  userText: {
    fontSize: 18,
  },
});


export default function Tweet({
  name, time, date, children,
}) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.detailsTextContainer}>
          <Text style={styles.userText}>
            {name}
          </Text>
          <Text>
            {time}
          </Text>
          <Text>
            {date}
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text>
          {children}
        </Text>
      </View>
    </View>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
