import React from "react"
import { StyleSheet, View } from "react-native"

export const AppCard = ({ children, style }) => (
    <View style={{ ...styles.default, ...style }}>{children}</View>
)

const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 8, //! для застосування тіні на андроїд
    },
})
