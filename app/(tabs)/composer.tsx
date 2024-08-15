import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function ComposerIndex() {
  return (
    <View style={styles.container}>
    {renderHeader()}
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    />
  </View>
  );
}

// Define the type for the data items
interface DataItem {
    name: string;
    birthyear: number;
  }

// Example data
const data: DataItem[] = [
    {name: 'Beethoven', birthyear: 1770 },
    {name: 'Mozart', birthyear: 1756 },
    {name: 'Bach', birthyear: 1685 },
  ];
  
  // Render header component
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.headerText}>Birth Year</Text>
    </View>
  );
  
  // Render each row
  const renderItem = ({ item }: { item: DataItem }) => (
    <View style={styles.row}>
        <Link href={`/composer/${item.name}`} style={styles.cell}>
        <Text style={styles.cellText}>{item.name}</Text>
        </Link>
        <Text style={styles.cellText}>{item.birthyear}</Text>
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
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    headerText: {
      flex: 1,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    cell: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cellText: {
      textAlign: 'center',
      color: 'blue',
    },
  });