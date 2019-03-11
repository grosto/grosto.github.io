import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import Text from './Text';
import Separator from './Separator';
import content from '../content.json';
import { BASE_PADDING } from './theme';

const styles = StyleSheet.create({
  root: { padding: BASE_PADDING, flex: 1 },
  experienceRoot: { paddingVertical: BASE_PADDING / 2 },
  companyContainer: { flexDirection: 'row', alignItems: 'baseline' },
  companyName: { paddingRight: BASE_PADDING / 2 }
});

function Experience({ position, company, period, description }) {
  return (
    <View style={styles.experienceRoot}>
      <Text variant="experienceTitle">{position}</Text>
      <View style={styles.companyContainer}>
        <Text variant="companyName" style={styles.companyName}>
          {company}
          {','}
        </Text>
        <Text variant="period">{period}</Text>
      </View>

      <Text>{description}</Text>
    </View>
  );
}

Experience.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

function WorkExperience() {
  return (
    <View style={styles.root}>
      <Text variant="sectionTitle">Work Experience</Text>
      <Separator />
      {content.experiences.map(experience => (
        <Experience
          key={experience.company + experience.period}
          {...experience}
        />
      ))}
    </View>
  );
}

export default WorkExperience;
