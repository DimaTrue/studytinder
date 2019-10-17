import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import { HomeScreenPics } from '../constants/Pics';
import { Card } from '../components/Card';

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={HomeScreenPics}
          renderCard={Card}
          infinite // keep looping cards infinitely
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2} // number of cards shown in background
          // cardVerticalMargin={50}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
