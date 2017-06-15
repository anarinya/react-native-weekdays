import React, { Component } from 'react';
import { Text } from 'react-native';

class DayItem extends Component {
  render() {
    const { day } = this.props;
    return (
      <Text style={this.style()}>
        { day }
      </Text>
    );
  }

  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    };
  }

  color() {
    let opacity = 1 / this.props.daysUntil;
    return 'rgba(0, 255, 199, '+ opacity + ')';
  }

  fontWeight() {
    let weight = 8 - this.props.daysUntil;
    return (weight * 100).toString();
  }

  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  }

  lineHeight() {
    return 70 - (4 * this.props.daysUntil);
  }
}

export default DayItem;