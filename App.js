import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {


  //courseGoals is an array of objects-
  const [courseGoals, setCourseGoals] = useState([])


  const addGoalHandler = (goalTitle) => {
    //functional form of updateState to updateState based on prev
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }])
    console.log('this is running')
    // setEnteredGoal('')
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      //Filter returns new array based on certain critera, true to keep item, false to drop it
      return currentGoals.filter((currentGoal) => currentGoal.id !== goalId)
    })
  }

  return (  //in pros, I need goalInoutHandler, eneteredGoal, and addGoalHandler

    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} onDelete={removeGoalHandler} id={itemData.item.id} />
        )} />


    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

