import React from 'react';
import { View, StyleSheet, Link } from '@react-pdf/renderer';
import Text from './Text';
import Separator from './Separator';
import { BASE_PADDING } from './theme';

const styles = StyleSheet.create({
  root: {
    paddingTop: 0,
    paddingBottom: BASE_PADDING * 2,
    marginTop: -BASE_PADDING * 2
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: BASE_PADDING
  },
  separator: {
    flex: 1,
    marginTop: BASE_PADDING * 2,
    marginLeft: BASE_PADDING / 2
  }
});

/* eslint-disable max-len */
const PR_URL = 'https://github.com/pulls?q=+is%3Apr+author%3Agrosto+';
const ISSUES_URL =
  'https://github.com/facebook/jest/issues?utf8=%E2%9C%93&q=is%3Aissue+grosto';
/* eslint-enable max-len */

function OpenSource() {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text variant="sectionTitle">Open Source</Text>
        <Separator style={styles.separator} />
      </View>
      <Text>
        Contributed to several projects such as Jest testing framework, Deno
        Javascript Runtime. <Link src={PR_URL}>Authored PRs</Link>, and{' '}
        <Link src={ISSUES_URL}>issues I have helped with</Link>.
      </Text>
    </View>
  );
}

export default OpenSource;
