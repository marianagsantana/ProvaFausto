import React from 'react';
import { View, Text, Button } from 'react-native';
import HabitChart from './HabitChart';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <HabitChart />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default HomeScreen;
