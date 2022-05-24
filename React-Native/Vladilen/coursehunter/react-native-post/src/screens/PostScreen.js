import React, { useEffect } from "react"
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    ScrollView,
    Alert,
} from "react-native"
import { Item, HeaderButtons } from "react-navigation-header-buttons"
import { AppHeaderIcon } from "../components/AppHeaderIcon"
import { DATA } from "../data"
import { THEME } from "../theme"

export const PostScreen = ({ route: { params } }) => {
    const postId = params.postId

    const post = DATA.find((p) => p.id === postId)

    // useEffect(() => {
    //   navigation.setParams({ booked: post.booked })
    // }, [])

    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы точно хотите удалить пост?",
            [
                {
                    text: "Отменить",
                    style: "cancel",
                },
                { text: "Удалить", style: "destructive", onPress: () => {} },
            ],
            { cancelable: false }
        )
    }

    return (
        <ScrollView>
            <Image source={{ uri: post.img }} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button
                title="Удалить"
                color={THEME.DANGER_COLOR}
                onPress={removeHandler}
            />
        </ScrollView>
    )
}

PostScreen.navigationOptions = ({ route: { params } }) => {
    const date = params.date
    const booked = params.booked
    const iconName = booked ? "ios-star" : "ios-star-outline"
    return {
        headerTitle: "Пост от " + new Date(date).toLocaleDateString(),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title="Take photo"
                    iconName={iconName}
                    onPress={() => console.log("Press photo")}
                />
            </HeaderButtons>
        ),
    }
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
    },
    textWrap: {
        padding: 10,
    },
    title: {
        fontFamily: "open-regular",
    },
})
