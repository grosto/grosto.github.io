import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from '@react-pdf/renderer';
import Text from './Text';
import { PRIMARY_COLOR, BASE_PADDING } from './theme';

const styles = StyleSheet.create({
  container: {
    width: 130,
    paddingVertical: BASE_PADDING / 2
  },
  skillMeter: {
    backgroundColor: '#e6e6e6',
    height: 10
  },
  skillPercentage: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR
  }
});

function Skill({ name, percentage }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.skillMeter}>
        <View style={[styles.skillPercentage, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

export default Skill;
