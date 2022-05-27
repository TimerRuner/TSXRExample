import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet, Modal, Alert } from "react-native"
import { THEME } from "../theme"
import { AppButton } from "./ui/AppButton"

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert(
                "Error!",
                `Min length of title 3 symbols. Now ${
                    title.trim().length
                } symbols`
            )
        } else {
            onSave(title)
        }
    }

    return (
        <Modal visible={visible} animationType="slide" transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setTitle}
                    value={title}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <AppButton
                        color={THEME.DANGER_COLOR}
                        onPress={() => {
                            onCancel()
                            setTitle(value)
                        }}
                    >
                        Cancel
                    </AppButton>
                    <AppButton onPress={saveHandler}>Save</AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: "80%",
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
})
