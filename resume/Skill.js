import React from 'react';
import path from 'path';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image } from '@react-pdf/renderer';
import Text from './Text';
import { BASE_PADDING } from './theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: BASE_PADDING / 2,
    paddingVertical: BASE_PADDING / 2
  },
  logo: {
    width: 16,
    marginRight: 4
  }
});

const logoDir = path.resolve(__dirname, '../website/img');

function Skill({ name, logo }) {
  const logoPath = path.resolve(logoDir, logo);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} src={logoPath} safePath={logoDir} />
      <Text>{name}</Text>
    </View>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default Skill;
