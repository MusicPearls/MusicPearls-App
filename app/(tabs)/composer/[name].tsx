import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useLocalSearchParams, Stack} from 'expo-router';

const ComposerDetail = () => {
  const { name } = useLocalSearchParams<{ name: string }>();;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: name }}/>
      <Text style={styles.title}>{name} Opus Table</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ComposerDetail;