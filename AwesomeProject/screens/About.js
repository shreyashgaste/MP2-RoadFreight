import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  SafeAreaView
} from "react-native";

export default function About({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <View>
            <Text style={styles.heading}>WELCOME TO FREIGHT-CENTRAL</Text>
            <View style={styles.line} />
            <Text style={[{ fontSize: 18 }, styles.heading]}>Who we are?</Text>
            <Text style={styles.paraInfo}>
              We are one of the players in transportation industry who connects
              transporters, truck drivers,customers and suppliers. We are a
              platform that connects the transportation industry with the truck
              drivers and the customers and related entities with objective of
              making the material transportation simpler, quicker, efficient by
              providing better whehicles at affordable price.
            </Text>
            <View style={styles.line} />
            <Text style={[{ fontSize: 18 }, styles.heading]}>What we do?</Text>
            <Text style={styles.paraInfo}>
              We help movement of goodsand vehicles from the source to the
              destination. We provide the best services to the customers and the
              truck drivers.
            </Text>
            <View style={styles.line} />
            <Text style={[{ fontSize: 18 }, styles.heading]}>
              Our Vision...
            </Text>
            <Text style={styles.paraInfo}>
              To help all players in transportation industry
              manufacures,transporters,customers,importers,truckers to come
              under one umbrella and provide better service.
            </Text>
            <View style={styles.line} />
            <Text style={[{ fontSize: 18 }, styles.heading]}>
              Special title treatment
            </Text>
            <Text style={styles.paraInfo}>
              At Freight-Central We serve the transportation industry to best of
              our abillities to foster profitable, safe, secure good
              transportation and service for customers.
            </Text>
            <View style={styles.line} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

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
  line: {
    borderBottomColor: "grey",
    borderBottomWidth: 0.6,
    width: "90%",
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  paraInfo: {
    marginTop: 10,
    textAlign: "center",
    justifyContent: "space-between",    
  },
});
