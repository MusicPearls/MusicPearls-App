import React, { useState, useEffect , useLayoutEffect} from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams, useRouter} from 'expo-router';
import { useNavigation } from '@react-navigation/native';
const data = require('../../../assets/data/form_opus.json')
import OpusBox from '@/components/OpusBox';

type Opus = {
  opusName: string;
  composer: string;
  form: string;
  formPopularity: number;
  recordingCount: number;
};


const FormDetail = () => {

  const [backData, setBackData] = useState<Opus[]>([]);
  const { name } = useLocalSearchParams<{ name: string }>();;
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  useEffect(() => {
    var formData = data.filter((opus: Opus) => opus.form === name);
    formData = formData.sort((a: Opus, b: Opus) => b.formPopularity - a.formPopularity);
    setBackData(formData);
  }, [name]);

  return (
    <View style={styles.container}>
      <FlatList
        data={backData}
        renderItem={({ item, index }) => <OpusBox opus={item} index={index} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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

export default FormDetail;