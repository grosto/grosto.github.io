import React from 'react';
import { Document, Page, View, StyleSheet, Link } from '@react-pdf/renderer';
import PersonalDetails from './PersonalDetails';
import WorkExperience from './WorkExperience';
import TechnicalSkills from './TechnicalSkills';
import OpenSource from './OpenSource';
import Text from './Text';
import { BASE_PADDING } from './theme';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: BASE_PADDING * 3
  },
  caption: {
    position: 'absolute',
    bottom: BASE_PADDING * 3,
    left: 0,
    right: 0
  },
  captionTextContainer: {
    alignItems: 'center'
  }
});

const REACT_PDF_URL = 'https://github.com/diegomura/react-pdf';
const PERSONAL_WEBSITE_URL = 'https://github.com/grosto/grosto.github.io';

function Caption() {
  return (
    <View style={styles.caption}>
      <View style={styles.captionTextContainer}>
        <Text variant="caption">
          This document has been generated with{' '}
          <Link src={REACT_PDF_URL}>react-pdf</Link> library. Check out source{' '}
          <Link src={PERSONAL_WEBSITE_URL}>here</Link>.
        </Text>
      </View>
    </View>
  );
}

function App() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ flexDirection: 'row' }}>
          <PersonalDetails />
          <WorkExperience />
        </View>
        <OpenSource />
        <TechnicalSkills />
        <Caption />
      </Page>
    </Document>
  );
}

export default App;
