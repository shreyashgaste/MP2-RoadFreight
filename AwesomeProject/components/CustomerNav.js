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
// import CustomerSignin from "../screens/Customer/CustomerSignin";
// import CustomerSignup from "../screens/Customer/CustomerSignup";
import CustomerDashboard from "../screens/Customer/CustomerDashboard";
import CustomerHistory from "../screens/Customer/CustomerHistory";
import PendingOrder from "../screens/Customer/PendingOrder";
import TruckBooking from "../screens/Customer/TruckBooking";
import Signout from "../screens/Common/Signout";
import CustomerProfile from "../screens/Customer/CustomerProfile";
import CustomerTruckList from "../screens/Truck/CustomerTruckList";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import CustomDrawer from "./CustomDrawer";
import Payment from "../screens/Customer/Payment";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DashStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GoDashboard"
        component={CustomerDashboard}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="Signout"
        component={Signout}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="CustomerHistory"
        component={CustomerHistory}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="PendingOrder"
        component={PendingOrder}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="TruckBooking"
        component={TruckBooking}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="CustomerTruckList"
        component={CustomerTruckList}
        options={{ headerTitle: "", headerShown: "" }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerTitle: "", headerShown: "" }}
      />
    </Stack.Navigator>
  );
}
export default function CustomerNav() {
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
        name="CustomerDashboard"
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
      {/* <Drawer.Screen
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
      /> */}
      <Drawer.Screen
        name="CustomerProfile"
        component={CustomerProfile}
        options={{
          headerTitle: "",
          drawerIcon: ({ focused }) => (
            <AntDesign name="profile" size={24} color={focused ? "white" : "grey"} />
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
