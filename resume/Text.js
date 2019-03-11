import React from 'react';
import PropTypes from 'prop-types';
import { Text as NativeText, StyleSheet } from '@react-pdf/renderer';
import {
  BLACK,
  PRIMARY_COLOR,
  FONT_FAMILY,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_ITALIC
} from './theme';

const styles = StyleSheet.create({
  nameTitle: {
    fontSize: 30
  },
  body: {
    fontSize: 10
  },
  sectionTitle: {
    fontSize: 24,
    color: PRIMARY_COLOR
  },
  personalInfo: {
    fontSize: 12
  },
  experienceTitle: {
    fontSize: 15,
    color: PRIMARY_COLOR
  },
  companyName: {
    fontSize: 10,
    fontFamily: FONT_FAMILY_BOLD
  },
  caption: {
    fontFamily: FONT_FAMILY_ITALIC,
    fontSize: 10
  },
  period: {
    fontSize: 10,
    fontFamily: FONT_FAMILY_ITALIC
  }
});

const getStyles = variant => styles[variant];

function Text({ variant, style, color, ...props }) {
  return (
    <NativeText
      style={[{ fontFamily: FONT_FAMILY, color }, getStyles(variant), style]}
      {...props}
    />
  );
}

Text.propTypes = {
  variant: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string
};

Text.defaultProps = {
  color: BLACK,
  variant: 'body',
  style: null
};

export default Text;
