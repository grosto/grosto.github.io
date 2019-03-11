import React from 'react';
import { View, StyleSheet, Link } from '@react-pdf/renderer';
import Text from './Text';
import Separator from './Separator';
import { PRIMARY_COLOR, BASE_PADDING } from './theme';

const styles = StyleSheet.create({
  personalDetailsRoot: {
    padding: BASE_PADDING
  },
  section: { paddingTop: BASE_PADDING, paddingBottom: BASE_PADDING * 2 },
  sectionTitle: { paddingBottom: BASE_PADDING },
  nameContainer: { alignItems: 'center', paddingBottom: BASE_PADDING },
  sectionLabels: {
    width: 80
  },
  infoContainer: {
    flexDirection: 'row'
  }
});

function ContactInfo() {
  return (
    <View style={styles.section}>
      <Text variant="sectionTitle" style={styles.sectionTitle}>
        Contact Information
      </Text>
      <View style={styles.infoContainer}>
        <View style={styles.sectionLabels}>
          <Text color={PRIMARY_COLOR}>Address:</Text>
          <Text color={PRIMARY_COLOR}>E-mail:</Text>
          <Text color={PRIMARY_COLOR}>Phone:</Text>
          <Text color={PRIMARY_COLOR}>Website:</Text>
        </View>
        <View>
          <Text>Leuven, Belgium</Text>
          <Text>rostogiorgi@gmail.com</Text>
          <Text>+32487570816</Text>
          <Text>
            <Link src="http://grosto.name">grosto.name</Link>
          </Text>
        </View>
      </View>
    </View>
  );
}

function Languages() {
  return (
    <View style={styles.section}>
      <Text variant="sectionTitle" style={styles.sectionTitle}>
        Languages
      </Text>
      <View style={styles.infoContainer}>
        <View style={styles.sectionLabels}>
          <Text color={PRIMARY_COLOR}>English:</Text>
          <Text color={PRIMARY_COLOR}>Russian:</Text>
          <Text color={PRIMARY_COLOR}>Georgian:</Text>
          <Text color={PRIMARY_COLOR}>French:</Text>
        </View>
        <View>
          <Text>Fluent</Text>
          <Text>Fluent</Text>
          <Text>Native</Text>
          <Text>Beginner</Text>
        </View>
      </View>
    </View>
  );
}

function Education() {
  return (
    <View style={styles.section}>
      <Text variant="sectionTitle" style={styles.sectionTitle}>
        Education
      </Text>
      <Text variant="personalInfo" color={PRIMARY_COLOR}>
        Bachelor of Arts,
      </Text>
      <Text variant="personalInfo" color={PRIMARY_COLOR}>
        Major in Business Administration
      </Text>
      <Text>American University in Bulgaria,</Text>
      <Text>2011 - 2016</Text>
    </View>
  );
}

function PersonalDetails() {
  return (
    <View style={styles.personalDetailsRoot}>
      <View style={styles.nameContainer}>
        <Text variant="nameTitle">Giorgi</Text>
        <Text variant="nameTitle">Rostomashvili</Text>
      </View>
      <Separator />
      <ContactInfo />
      <Separator />
      <Languages />
      <Separator />
      <Education />
    </View>
  );
}

export default PersonalDetails;
