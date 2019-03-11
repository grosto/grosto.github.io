import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import Skill from './Skill';
import Text from './Text';
import Separator from './Separator';
import { BASE_PADDING } from './theme';
import content from '../content.json';

const styles = StyleSheet.create({
  titleContainer: { flexDirection: 'row', alignItems: 'center' },
  separator: {
    flex: 1,
    marginTop: BASE_PADDING * 2,
    marginLeft: BASE_PADDING / 2
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});

function TechnicalSkills() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text variant="sectionTitle">Technical Skills</Text>
        <Separator style={styles.separator} />
      </View>
      <View style={styles.skillsContainer}>
        {content.skills.map(skill => (
          <Skill key={skill.name} {...skill} />
        ))}
      </View>
    </View>
  );
}

export default TechnicalSkills;
