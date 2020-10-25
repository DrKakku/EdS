import { StatusBa } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./Header";
import Subjects from "./Subjects";

export default function Attendance() {
  return (
    <View style={styles.content}>
      <Subjects />
    </View>
  );
}

const styles = StyleSheet.create({
  BG: {
    backgroundColor: "#fff",
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});
