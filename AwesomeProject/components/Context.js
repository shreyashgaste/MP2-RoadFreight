import React, {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = React.createContext();
const API_URL = "http://192.168.222.39:5000";
const AuthcontextProvider = (props) => {
  const [cust, setCust] = useState(false);
  const [trans, setTrans] = useState(false);
  const toggleCust = (st) => {
    setCust(st);
  };
  const toggleTrans = (st) => {
    setTrans(st);
  };
  const signOut = async () => {
    const res = await fetch(`${API_URL}/logout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    console.log(res.status);
    console.log(await res.json());
    console.log(AsyncStorage.getItem("authToken"));
    // history.push("/Customersignin");
    await AsyncStorage.clear();
    await AsyncStorage.removeItem("authToken");
    console.log(AsyncStorage.getItem("authToken"));
    setCust(false);
    setTrans(false);
    // props.navigation.navigate("Signout");
  };

  return (
    <AuthContext.Provider
      value={{ cust, trans, toggleCust, toggleTrans, signOut }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthcontextProvider;