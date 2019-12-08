import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native"

const GoalItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
            {/* <TouchableHighlight underlayColor="blue" onPress={props.onDelete}> */}
            <View style={styles.listItem}>
                < Text  > {props.title}</Text>
            </View>
            {/* </TouchableHighlight> */}
        </TouchableOpacity>
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