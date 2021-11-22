import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import About from "../screens/About";
import Contact from "../screens/Common/Contact";
import Profile from "../screens/Profile";
import Register from "../screens/Common/Register";
import TransporterSignin from "../screens/Transporter/TransporterSignin";
import BookingRequest from "../screens/Transporter/BookingRequest";
import History from "../screens/Transporter/History";
import TransporterDashboard from "../screens/Transporter/TransporterDashboard";
import TransporterSignup from "../screens/Transporter/TransporterSignup";
import TransporterTruckList from "../screens/Transporter/TransporterTruckList";
import TruckDetails from "../screens/Transporter/TruckDetails";
import Update from "../screens/Transporter/Update";
import RegisterTruck from "../screens/Truck/RegisterTruck";
import Signout from "../screens/Common/Signout";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomDrawer from "./CustomDrawer";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DashStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GoDashboard"
        component={TransporterDashboard}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="Signout"
        component={Signout}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="BookingRequest"
        component={BookingRequest}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="TransporterTruckList"
        component={TransporterTruckList}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="TruckDetails"
        component={TruckDetails}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="Update"
        component={Update}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="RegisterTruck"
        component={RegisterTruck}
        options={{ headerTitle: "", headerShown: "" }}
      />
    </Stack.Navigator>
  );
}
export default function TransporterNav() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        // headerShown: false,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="home-outline"
              size={24}
              color={focused ? "white" : "grey"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="information-circle-outline"
              size={24}
              color={focused ? "white" : "grey"}
            />
            
          ),
        }}
      />
      <Drawer.Screen
        name="TransporterDashboard"
        children={DashStack}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={24}
              color={focused ? "white" : "grey"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="message-text-outline"
              size={24}
              color={focused ? "white" : "grey"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="settings-outline"
              size={24}
              color={focused ? "white" : "grey"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
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
