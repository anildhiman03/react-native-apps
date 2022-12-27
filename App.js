import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = React.useState();
  const [taskItems, setTaskItems] = React.useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completedTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => completedTask(index)}
              >
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Write a task */}

      <KeyboardAvoidingView
        behavior={Platform.os === "ios" ? "padding" : "height"}
        style={styles.writTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        ></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 20,
  },
  writTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignContent: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
