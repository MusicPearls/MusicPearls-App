import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
const localData: BackData = require('../../assets/data/composers.json');

export default function ComposerIndex() {

    const [backData, setBackData] = useState<BackData>(localData);
    useEffect(() => {  
      setBackData(localData)
    }, []);

    return (
        <View style={styles.container}>
        {renderHeader()}
        <FlatList
        data={backData.composers}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        />
    </View>
    );
}

// Define the type for the data items
interface BackData {
    composers: Composer[];
  }
interface Composer{
    name: string;
    id: string;
    birthyear: number;
}
  
  // Render header component
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.headerText}>Birth Year</Text>
    </View>
  );
  
  // Render each row
  const renderItem = ({ item }: { item: Composer }) => (
    <View style={styles.row}>
        <Link href={`/composer/${item.name}`} style={styles.cell}>
        <Text style={styles.cellTextName}>{item.name}</Text>
        </Link>
        <Text style={styles.cellTextBirth}>{item.birthyear}</Text>
    </View>
    );
    
  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      backgroundColor: '#f0f0f0',
      paddingVertical: 8,
      paddingHorizontal: 8,
      borderBottomWidth: 4,
      borderBottomColor: '#ddd',
    },
    headerText: {
      flex: 1,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 2,
      borderBottomColor: '#ddd',
    },
    cell: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cellBirth: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 8
      },
    cellTextName: {
      textAlign: 'center',
      color: 'blue',
    },
    cellTextBirth: {
        textAlign: 'left',
      },
  });