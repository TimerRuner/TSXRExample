import React, { useState, useEffect, useContext, useCallback } from "react"
import { StyleSheet, View, FlatList, Image, Dimensions } from "react-native"
import { Button } from "react-native-web"
import { AddTodo } from "../component/AddTodo"
import { Todo } from "../component/Todo"
import { AppButton } from "../component/ui/AppButton"
import { AppLoader } from "../component/ui/AppLoader"
import { AppText } from "../component/ui/AppText"
import { ScreenContext } from "../context/screen/screenContext"
import { TodoContext } from "../context/todo/todoContext"
import { THEME } from "../theme"

export const MainScreen = () => {
    const { addTodo, todos, removeTodo, fetchTodos, loading, error } =
        useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)
    const [deviceWidth, setDewiceWidth] = useState(
        Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
    )

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])

    useEffect(async () => {
        loadTodos()
    }, [])

    useEffect(() => {
        const update = () => {
            const width =
                Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
            setDewiceWidth(width)
        }
        const subscriptions = Dimensions.addEventListener("change", update)
        return () => subscriptions?.remove()
    })

    if (loading) {
        return <AppLoader />
    }
    if (error) {
        return (
            <View style={styles.center}>
                <AppText style={styles.error}>{error}</AppText>
                <AppButton onPress={loadTodos}>Repeat</AppButton>
            </View>
        )
    }

    let content = (
        <View style={{ width: deviceWidth }}>
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <Todo
                        todo={item}
                        onRemove={removeTodo}
                        onOpen={changeScreen}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )

    if (todos.length === 0) {
        content = (
            <View style={styles.imageWrap}>
                <Image
                    style={styles.image}
                    source={require("../../assets/no-items.png")}
                    resizeMode="contain"
                />
            </View>
        )
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrap: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 300,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    error: {
        fontSize: 20,
        color: THEME.DANGER_COLOR,
        marginBottom: 10,
    },
})
