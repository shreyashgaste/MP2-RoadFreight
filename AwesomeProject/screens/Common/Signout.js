import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, StyleSheet, Text, View, BackHandler } from "react-native";

export default function Signout({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello Signout</Text>
      <StatusBar style="auto" />
      <Pressable
        onPress={() =>
            {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          })
          BackHandler.exitApp();
        }
        }
      >
        <Text>Go to Profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
