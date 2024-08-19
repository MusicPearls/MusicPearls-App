import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.bold}>𝄡 Music Pearls Mobile</Text>
      </Text>
      <Text style={styles.subtitle}>Your guide to discovering classical music</Text>
      <Text style={styles.text}>Use the navigation bar below to explore:</Text>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}><Text style={styles.bold}>Composers</Text> - View rankings of their most famous works</Text>
        <Text style={styles.listItem}><Text style={styles.bold}>Musical Forms</Text> - Discover top works by musical form</Text>
      </View>
      <Text style={styles.text}>
        Refer to the{' '}
        <Link href="/about" style={styles.link}>
          About
        </Link>{' '}
        page for detailed documentation
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10, // Adjust padding as needed
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 8,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  listContainer: {
    marginVertical: 16,
  },
  listItem: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 4,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
    textAlign: 'center',
  },
});