import Expo from 'expo';
import Moment from 'moment';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DayItem } from './src/components';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        { this.renderDays() }
      </View>
    );
  }

  renderDays() {
    const dayItems = [];
    for (let i = 0; i < 7; i++) {
      let day = Moment().add(i, 'days').format('dddd');
      dayItems.push(
        <DayItem key={i} day={day} daysUntil={i+1} />
      );
    }
    return dayItems;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2d2d',
    alignItems: 'center', // Move width-wise in column mode
    justifyContent: 'center', // Move height-wise in column mode
  },
  header: {
    fontSize: 24
  }
});

Expo.registerRootComponent(App);
