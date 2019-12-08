import React from "react"
import { View, Text, StyleSheet } from "react-native"

const GoalItem = (props) => {
    return (
        <View style={styles.listItem}>
            < Text  > {props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        //margin top and bottom, but not left and write (not available in CSS b/c marginVertical is not a property you have in CSS, but you have it in RN)
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem