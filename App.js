import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {

  //courseGoals is an array of objects-
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  console.log("RE_RENDERING COMPONENT")
  console.log(courseGoals)

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return;
    }
    //functional form of updateState to updateState based on prev
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }])
    console.log('this is running')
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    console.log(courseGoals)
    console.log('to be deleted', goalId)
    setCourseGoals(currentGoals => {
      //Filter returns new array based on certain critera, true to keep item, false to drop it
      return currentGoals.filter((currentGoal) => currentGoal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (  //in pros, I need goalInoutHandler, eneteredGoal, and addGoalHandler

    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler} />

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

