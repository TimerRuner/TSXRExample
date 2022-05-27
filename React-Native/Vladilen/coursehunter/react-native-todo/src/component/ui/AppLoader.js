import React from "react"
import { THEME } from "../../theme"

import { StyleSheet, View, ActivityIndicator } from "react-native"

export const AppLoader = () => (
    <View style={styles.center}>
        <ActivityIndicator size="large" color={THEME.MAIN_COLOR} />
    </View>
)

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
