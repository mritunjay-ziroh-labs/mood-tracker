import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types';
import { MoodItemRow } from '../components/MoodItemRow';

export const Home: React.FC = () => {
  const [modalList, setModalList] = React.useState<MoodOptionWithTimestamp[]>(
    [],
  );

  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setModalList(current => [...current, { mood, timestamp: Date.now() }]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
      {modalList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
