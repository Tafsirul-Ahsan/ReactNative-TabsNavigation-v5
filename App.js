import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();



function Games() {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue", alignItems: "center" }}>
      <Text style={{ margin: 90, fontSize: 28 }}>This is a Games Screen</Text>
      <Image source={require("./assets/Lottie/game.png")} autoPlay />
    </View>
  );
}

function Apps() {
  return (
    <View style={{ flex: 1, backgroundColor: "tomato", alignItems: "center" }}>
      <Text style={{ margin: 90, fontSize: 28 }}>This is a Apps Screen</Text>
      <Image source={require("./assets/Lottie/apps.png")} autoPlay />
    </View>
  );
}

function Movies() {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue", alignItems: "center" }}>
      <Text style={{ margin: 90, fontSize: 28 }}>This is a Movies Screen</Text>
      <Image source={require("./assets/Lottie/movie.png")} autoPlay />
    </View>
  );
}

function Books() {
  return (
    <View style={{ flex: 1, backgroundColor: "grey", alignItems: "center" }}>
      <Text style={{ margin: 90, fontSize: 28, color: "black" }}>
        This is a Books Screen
      </Text>
      <Image source={require("./assets/Lottie/book.png")} autoPlay />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Games":
                iconName = focused
                  ? "logo-reddit"
                  : "logo-reddit";
                break;
              case "Apps":
                iconName = focused
                  ? "qr-code"
                  : "qr-code";
                break;
              case "Movies":
                iconName = focused
                ? "videocam"
                : "videocam-outline";
                break;
              case "Books":
                iconName = focused
                  ? "receipt"
                  : "receipt" 
                break;
              default:
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
            }
            // return <Ionicons name={iconName} size={size} color={color} />;
            return <Ionicons name={iconName} size={35} color={color} />;
          },
        })}
      >
        <Tabs.Screen name="Games" component={Games}/>
        <Tabs.Screen name="Apps" component={Apps} />
        <Tabs.Screen name="Movies" component={Movies} />
        <Tabs.Screen name="Books" component={Books} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
