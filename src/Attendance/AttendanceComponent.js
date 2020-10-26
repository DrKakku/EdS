import { StatusBa } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Subjects from "./Subjects";
import styles from "./Theme";

export default function Attendance() {
  return (
    <View style={styles.viewProperties}>
      <Subjects />
    </View>
  );
}

/*const styles = StyleSheet.create({
  BG: {
    backgroundColor: "#fff",
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 50,
  },
});*/
