import React, { useState } from "react"

import { View, TextInput, Button, StyleSheet, Modal } from "react-native"

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')
    //in pros, I need goalInoutHandler, eneteredGoal, and addGoalHandler

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create(
    {
        inputContainer: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: 'center'
        },
        input: {
            width: '80%',
            borderColor: 'black',
            borderWidth: 1,
            marginBottom: 10,
            padding: 10
        },
        buttonContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            width: '60%'
        },
        button: {
            //40% of parent view which itself takes 60% of entire avail width
            width: '40%'
        }
    }
)