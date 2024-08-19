import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>About</Text>
        <Text style={styles.paragraph}>
          Music Pearls is a free app designed to help you explore the world of classical music. Whether you're a seasoned fan or just starting out, 
          we offer easy-to-understand info about classical music works and artists. Our unique approach looks at the popularity of whole pieces, not just individual movements, 
          so you get a complete picture of each composition.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Disclaimers</Text>
        <Text style={styles.subheading}>Music Pearls strives for accuracy but is not flawless</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Categorization:</Text> We use extensive regular expression functions and AI categorization to parse and classify over a million music tracks 
            into their respective musical forms based on their titles. 
            While this method is robust, errors can occur, and some works with non-standard titles, especially those of modern composers, may be left out.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Descriptions:</Text> We use the Wikipedia API to generate descriptions for each displayed work. Despite our best efforts to ensure accuracy, 
            some descriptions may not perfectly match the intended works.
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Methodology</Text>
        <Text style={styles.paragraph}>
          Starting with raw track data from Spotify, we apply a three-step process to produce the results shown on our pages: grouping, normalizing, and filtering.
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Grouping:</Text> This step combines tracks that represent the same work (e.g., the multiple movements of a symphony or sonata). 
            For example, the four movements of a symphony are grouped into a single entry representing the entire symphony, 
            with the average popularity of all movements considered.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Normalizing:</Text> This step refines the 'Popularity' data to make it more descriptive. Initially, each track has a 'popularity' 
            score from 0 to 100, assigned by Spotify based on the number of plays and the recency of those plays. 
            After grouping, each work receives a 'Popularity' score based on the average popularity of its constituent tracks. 
            Within each musical form or composer, we normalize these scores from 0 to 100 (100 being the most popular and 0 the least) 
            based on the number of recordings each work has. Works with high popularity but few recordings are penalized in this process.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Filtering:</Text> We aim to display only relevant works in our generated lists. For each criterion, we strive to show at least 10 entries, 
            selecting works with more than 50 recordings. If fewer than 10 entries meet the criteria, we include those with the highest number of recordings 
            until we reach 10 entries.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  list: {
    marginTop: 8,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default AboutScreen;