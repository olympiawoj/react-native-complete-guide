import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)

  }

  const addGoalHandler = () => {
    //functional form of updateState to updateState based on prev
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
    console.log('this is running')
    setEnteredGoal('')
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map(courseGoal => <View key={courseGoal} style={styles.listItem}>< Text  > {courseGoal}</Text></View>
        )}
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    //margin top and bottom, but not left and write (not available in CSS b/c marginVertical is not a property you have in CSS, but you have it in RN)
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

