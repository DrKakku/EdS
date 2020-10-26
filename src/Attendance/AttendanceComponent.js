import { StatusBar } from "expo-status-bar";
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
