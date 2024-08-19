import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { REACT_APP_API_BASE_URL, REACT_APP_LOCAL_API_BASE_URL } from '@env';
const localData: BackData = require('../../assets/data/forms.json');

export default function FormIndex() {

    const [backData, setBackData] = useState<BackData>(localData);
    useEffect(() => {  
      setBackData(localData)
    }, []);

    return (
        <View style={styles.container}>
        {renderHeader()}
        <FlatList
        data={backData.forms}
        renderItem={renderItem}
        keyExtractor={item => item.formName}
        />
    </View>
    );
}

// Define the type for the data items
interface BackData {
    forms: Form[];
  }
interface Form{
    formName: string;
    description: string;
}
  
  // Render header component
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Musical Form</Text>
    </View>
  );
  
  // Render each row
  const renderItem = ({ item }: { item: Form }) => (
    <View style={styles.row}>
        <Link href={`/form/${item.formName}`} style={styles.cell}>
        <Text style={styles.cellTextName}>{item.formName}</Text>
        </Link>
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