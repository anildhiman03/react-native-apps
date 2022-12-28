import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { signOut } from "@firebase/auth";

const HomeScreen = ({ navigation }) => {
  const handleSignOut = () => {
    signOut(auth)
      .then((_) => {
        navigation.navigate("Login");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Email:{auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
