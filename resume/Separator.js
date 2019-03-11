import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from '@react-pdf/renderer';
import { PRIMARY_COLOR } from './theme';

const styles = StyleSheet.create({
  separator: {
    height: 3,
    backgroundColor: PRIMARY_COLOR
  }
});

function Separator({ style }) {
  return <View style={[styles.separator, style]} />;
}

Separator.propTypes = {
  style: PropTypes.object
};

Separator.defaultProps = {
  style: null
};

export default Separator;
