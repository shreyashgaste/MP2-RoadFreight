import React, { useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import CustomerSignin from "../screens/Customer/CustomerSignin";
import CustomerSignup from "../screens/Customer/CustomerSignup";
import TransporterSignin from "../screens/Transporter/TransporterSignin";
import TransporterSignup from "../screens/Transporter/TransporterSignup";
import { Alert } from "react-native";
const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
  useEffect(() => {
    // Alert.alert("Session timeout in 20 seconds");
  }, []);
  return (
    <RootStack.Navigator headerShown={false}>
      <RootStack.Screen
        name="CustomerSignin"
        component={CustomerSignin}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <RootStack.Screen
        name="CustomerSignup"
        component={CustomerSignup}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <RootStack.Screen
        name="TransporterSignin"
        component={TransporterSignin}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <RootStack.Screen
        name="TransporterSignup"
        component={TransporterSignup}
        options={{ headerTitle: "", headerShown: "" }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
