import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";
const API_URL = "http://192.168.246.39:5000";
const TransporterProfile = ({ navigation }) => {
  const [user, setUser] = useState([""]);
  useEffect(() => {
    async function fetchData() {
      const email = await AsyncStorage.getItem("transemail");
      console.log(email);
      await fetch(`${API_URL}/transprofile/${email}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transporterEmail: email,
        }),
      })
        .then(async (res) => await res.json())
        .then((data) => {
          setUser(data);
          // console.log(data);
        });
    }
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <View>
            <Text style={styles.heading}>PROFILE</Text>
          </View>
          <View style={styles.table}>
            <Text style={styles.item}>Name</Text>
            <Text style={styles.item}>: {user.name}</Text>
            <Text style={styles.item}>Email</Text>
            <Text style={styles.item}>: {user.email}</Text>
            <Text style={styles.item}>Phone</Text>
            <Text style={styles.item}>: {user.phone}</Text>
            <Text style={styles.item}>Company</Text>
            <Text style={styles.item}>: {user.company}</Text>
            <Text style={styles.item}>Address</Text>
            <Text style={styles.item}>: {user.address}</Text>
            <View />
            <View style={styles.line} />

            <Text style={{ textAlign: "center", margin: 10 }}>
              ALWAYS TRANSPORT SAFELY
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TransporterProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7f1d5",
    marginTop: 30,
    marginBottom: 30,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    color: "black",
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  button: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    marginTop: 10,
    width: "50%",
  },
  item: {
    width: "50%",
    paddingBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
  text: {
    textAlign: "center",
  },
  table: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  line: {
    borderBottomColor: "grey",
    borderBottomWidth: 0.6,
    width: "90%",
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 30,
  },
});
