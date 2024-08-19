import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams, Stack} from 'expo-router';

interface Opus {
    opusName: string;
    composer: string;
    formPopularity?: number;
    composerPopularity?: number;
    recordingCount: number;
  }
  
  interface OpusBoxProps {
    opus: Opus;
    index: number;
    num?: number;
  }
  
  const getMedalImage = (rank: number) => {
    if (rank === 1) {
      return require('..//assets/images/gold.png');
    } else if (rank === 2) {
      return require('../assets/images/silver.png');
    } else if (rank === 3) {
      return require('../assets/images/bronze.png');
    }
    return null;
  };
  
  
  const OpusBox = ({ opus, index, num }: OpusBoxProps) => {
    
    // Function to get the ordinal suffix
    const getOrdinal = (num: number): string => {
      let suffix = ['th', 'st', 'nd', 'rd'],
        v = num % 100;
      return num + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
    };
  
    const medalImage = getMedalImage(index + 1);
    const popularity = opus.formPopularity || opus.composerPopularity;
  
    return (
      <View style={styles.box}>
        <View style={styles.placeRow}>
          <Text style={styles.placeText}>{getOrdinal(index + 1)} Place</Text>
          {medalImage && <Image source={medalImage} style={styles.medalImage} />}
        </View>
        <Text style={styles.infoText}><Text style={styles.label}>Name:</Text> {opus.opusName}</Text>
        <Text style={styles.infoText}><Text style={styles.label}>Composer:</Text> {opus.composer}</Text>
        <Text style={styles.infoText}><Text style={styles.label}>Popularity:</Text> {popularity?.toFixed(2)}</Text>
        <Text style={styles.infoText}><Text style={styles.label}>Recordings:</Text> {opus.recordingCount}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    box: {
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#fff',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 2,
    },
    placeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    placeText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10, // Space between text and image
    },
    medalImage: {
      width: 20,
      height: 20,
    },
    infoText: {
      fontSize: 14,
      marginVertical: 2,
    },
    label: {
      fontWeight: 'bold',
    },
  });

  export default OpusBox;