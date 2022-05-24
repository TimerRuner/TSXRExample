import "react-native-gesture-handler"

import React from "react"
import { THEME } from "../theme"
import { Platform } from "react-native"
import { MainScreen } from "../screens/MainScreen"
import { PostScreen } from "../screens/PostScreen"
import { BookedScreen } from "../screens/BookedScreen"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { AppHeaderIcon } from "../components/AppHeaderIcon"
import { Ionicons } from "@expo/vector-icons"

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const StackPost = createStackNavigator()
const Tab = createBottomTabNavigator()

const PostNavigator = () => {
    return (
        <StackPost.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor:
                        Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
                },
                headerTintColor:
                    Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
            }}
        >
            <StackPost.Screen
                name="Main"
                component={MainScreen}
                options={({ route }) => ({
                    headerTitle: "Blog",
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Take photo"
                                iconName="ios-camera"
                                onPress={() => console.log("Press photo")}
                            />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Toggle Drawer"
                                iconName="ios-menu"
                                onPress={() => console.log("Press photo")}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
            <StackPost.Screen
                name="Post"
                component={PostScreen}
                options={({ route }) => ({
                    headerTitle:
                        "Пост от " +
                        new Date(route.params.date).toLocaleDateString(),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Take photo"
                                iconName={
                                    route.params.booked
                                        ? "ios-star"
                                        : "ios-star-outline"
                                }
                                onPress={() => console.log("Press photo")}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
        </StackPost.Navigator>
    )
}

const StackBooked = createStackNavigator()

const BookedNavigator = () => {
    return (
        <StackBooked.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor:
                        Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
                },
                headerTintColor:
                    Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
            }}
        >
            <StackBooked.Screen
                name="Booked"
                component={BookedScreen}
                options={({ route }) => ({
                    headerTitle: "Booked",
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Toggle Drawer"
                                iconName="ios-menu"
                                onPress={() => console.log("Press photo")}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
            <StackBooked.Screen
                name="Post"
                component={PostScreen}
                options={({ route }) => ({
                    headerTitle:
                        "Пост от " +
                        new Date(route.params.date).toLocaleDateString(),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Take photo"
                                iconName={
                                    route.params.booked
                                        ? "ios-star"
                                        : "ios-star-outline"
                                }
                                onPress={() => console.log("Press photo")}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
        </StackBooked.Navigator>
    )
}

const MyStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: THEME.MAIN_COLOR,
                }}
            >
                <Tab.Screen
                    name="Post"
                    component={PostNavigator}
                    options={{
                        tabBarLabel: "All",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name="ios-albums"
                                size={25}
                                color={focused ? THEME.MAIN_COLOR : "#eee"}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Booked"
                    component={BookedNavigator}
                    options={{
                        tabBarLabel: "Booked",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name={focused ? "ios-star" : "ios-star-outline"}
                                size={25}
                                color={focused ? THEME.MAIN_COLOR : "#eee"}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default MyStack
