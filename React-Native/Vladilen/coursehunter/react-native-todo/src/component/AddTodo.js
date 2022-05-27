import React, { useState } from "react"
import { View, StyleSheet, TextInput, Keyboard, Alert } from "react-native"
import { THEME } from "../theme"
import { AntDesign } from "@expo/vector-icons"

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState("")

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue("")
            Keyboard.dismiss() //? приховування клавіатури при успішному добавлені тоду
        } else {
            Alert.alert("Enter name of todo")
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Enter name todo"
                autoCorrect={false}
                autoCapitalize="none"
            />
            <AntDesign.Button onPress={pressHandler} name="pluscircleo">
                Add
            </AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: "70%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
    },
})
