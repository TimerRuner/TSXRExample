import "react-native-gesture-handler"

import { THEME } from "../theme"
import { Platform } from "react-native"
import { MainScreen } from "../screens/MainScreen"
import { PostScreen } from "../screens/PostScreen"
import { BookedScreen } from "../screens/BookedScreen"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { AppHeaderIcon } from "../components/AppHeaderIcon"

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//!===========================================================

// const BookedNavigator = createStackNavigator(
//     {
//         Booked: BookedScreen,
//         Post: PostScreen,
//     },
//     {
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor:
//                     Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
//             },
//             headerTintColor:
//                 Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
//         },
//     }
// )

// const BottomNavigator = createBottomTabNavigator({
//     Post: {
//         screen: PostNavigator,
//         navigationOptions: {
//             tabBarIcon: <Ionicons name="ios-albums" size={25} />,
//         },
//     },
//     Booked: {
//         screen: BookedNavigator,
//         navigationOptions: {
//             tabBarIcon: <Ionicons name="ios-star" size={25} />,
//         },
//     },
// })
//!===========================================================
const Stack = createStackNavigator()

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor:
                            Platform.OS === "android"
                                ? THEME.MAIN_COLOR
                                : "#fff",
                    },
                    headerTintColor:
                        Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
                }}
            >
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={({ route }) => ({
                        headerTitle: "Мой блог",
                        headerRight: () => (
                            <HeaderButtons
                                HeaderButtonComponent={AppHeaderIcon}
                            >
                                <Item
                                    title="Take photo"
                                    iconName="ios-camera"
                                    onPress={() => console.log("Press photo")}
                                />
                            </HeaderButtons>
                        ),
                        headerLeft: () => (
                            <HeaderButtons
                                HeaderButtonComponent={AppHeaderIcon}
                            >
                                <Item
                                    title="Toggle Drawer"
                                    iconName="ios-menu"
                                    onPress={() => console.log("Press photo")}
                                />
                            </HeaderButtons>
                        ),
                    })}
                />
                <Stack.Screen
                    name="Post"
                    component={PostScreen}
                    options={({ route }) => ({
                        headerTitle:
                            "Пост от " +
                            new Date(route.params.date).toLocaleDateString(),
                        headerRight: () => (
                            <HeaderButtons
                                HeaderButtonComponent={AppHeaderIcon}
                            >
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MyStack
