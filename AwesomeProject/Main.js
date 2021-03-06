import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from "./components/Navbar";
import RootStackScreen from "./components/RootStackScreen";
import CustomerNav from "./components/CustomerNav";
import TransporterNav from "./components/TransporterNav";
import { AuthContext, AuthcontextProvider } from "./components/Context";
const API_URL = "http://192.168.222.39:5000";
export default function Main() {
  // const [cust, setCust] = useState(false);
  // const [trans, setTrans] = useState(false);
  const {cust, trans, toggleCust, toggleTrans} = useContext(AuthContext);
  // useEffect(() => {
  //   (async () => {
  //     let custToken;
  //     let transToken;
  //     custToken = null;
  //     transToken = null;
  //     try {
  //       custToken = await AsyncStorage.getItem("authToken");
  //       transToken = await AsyncStorage.getItem("transauthToken");
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     console.log(custToken);
      // if (custToken != null) setCust(true);
      // if (transToken != null) setTrans(true);
  //     console.log(cust);
  //     console.log(trans);
      
  //   }, 25000);
  // }, [cust || trans]);

  useEffect(async() => {
      let custToken;
      let transToken;
      custToken = null;
      transToken = null;
      try {
        custToken = await AsyncStorage.getItem("authToken");
        transToken = await AsyncStorage.getItem("transauthToken");
      } catch (e) {
        console.log(e);
      }
      console.log(custToken);
      // if (custToken != null) setCust(true);
      // if (transToken != null) setTrans(true);
      if (custToken != null) toggleCust(true);
      if (transToken != null) toggleTrans(true);
      console.log(cust);
      console.log(trans);
  }, [cust || trans]);
  // const authContext = React.useMemo(
  //   () => ({
  //     signOut: async () => {
  //       const res = await fetch(`${API_URL}/logout`, {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       });
  //       console.log(res.status);
  //       console.log(await res.json());
  //       console.log(AsyncStorage.getItem("authToken"));
  //       // history.push("/Customersignin");
  //       await AsyncStorage.clear();
  //       await AsyncStorage.removeItem("authToken");
  //       console.log(AsyncStorage.getItem("authToken"));
  //       setCust(false);
  //       setTrans(false);
  //       // props.navigation.navigate("Signout");
  //     },
  //   }),
  //   []
  // );
  

  return (
    // <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {cust != false ? (
          <CustomerNav key={cust} />
        ) : (
          [
            trans != false ? (
              <TransporterNav key={trans} />
            ) : (
              <RootStackScreen key={3} />
            ),
          ]
        )}
      </NavigationContainer>
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
