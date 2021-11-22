import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  ImageBackground,
  Animated
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Start({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          style={styles.bakcgroundImage}
          source={require("../assets/images/menu-bg.jpeg")}
        >
          <View style={styles.heading}>
            <Text style={styles.headingText}>
              WELCOME TO FREIGHT TRANSPORT!!
            </Text>
          </View>
          <View style={styles.line} />
          <Image
            style={styles.middleImage}
            source={require("../assets/images/truckHome.jpg")}
          ></Image>
          <View style={styles.line} />
          <Pressable
            style={styles.buttonBig}
            android_ripple={{ color: "grey" }}
            onPress={() => {navigation.navigate("Home")}}
          >
            <Text style={styles.text}>Get Started As</Text>
            <AntDesign name="right" size={28} color="black" />
          </Pressable>
          {/* <View style={styles.line} />
          <Pressable
            style={styles.bigButton}
            onPress={() => navigation.navigate("CustomerSignin")}
            android_ripple={{ color: "black" }}
          >
            <Text style={styles.bigButtonText}>CUSTOMER</Text>
          </Pressable>
          <Pressable
            style={styles.bigButton}
            onPress={() => navigation.navigate("TransporterSignin")}
            android_ripple={{ color: "black" }}
          >
            <Text style={styles.bigButtonText}>TRANSPORTER</Text>
          </Pressable> */}
        </ImageBackground>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  heading: {
    marginTop: 150,
    width: "100%",
    alignSelf: "center",
  },
  headingText: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    fontStyle: "italic",
  },
  backgroundContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
  },
  bakcgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  middleImage: {
    alignSelf: "center",
    height: 200,
    width: 200,
    marginTop: 30,
    borderRadius: 15,
    borderColor: "grey",
    borderWidth: 2,
  },
  buttonBig: {
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
    padding: 15,
    // backgroundColor: "#f7f9a8",
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "row",
  },
  text: {
    justifyContent: "center",
    fontSize: 20,
    marginRight: 50,
    marginLeft: 50,
  },
  line: {
    borderBottomColor: "white",
    borderBottomWidth: 0.6,
    width: "90%",
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  bigButton: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 40,
    width: "80%",
    marginBottom: 20,
    backgroundColor: "grey",
  },
  bigButtonText: {
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
});
