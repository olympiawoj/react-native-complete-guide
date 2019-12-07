import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View >
      <View style={{ padding: 50 }}>
        <TextInput placeholder="Course Goal" style={{ borderBottomColor: 'black', borderBottomWidth: 1, padding: 10 }} />
        <Button title="Add" />
      </View>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({

});
