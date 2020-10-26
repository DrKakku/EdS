import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Dashboard from "./src/Dashboard";
import Profile from "./src/Profile";
import NotesScreenComponent from "./src/Notes/NotesScreenComponent";
import Task from "./src/Task/TaskComponent";
import Attendance from "./src/Attendance/AttendanceComponent";

const Tab = createMaterialBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="#f0edf6"
      inactiveColor="#000"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: "#2296f3" }}
      shifting={true}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={NotesScreenComponent}
        options={{
          tabBarLabel: "Notes",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="note-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        options={{
          tabBarLabel: "Task",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-check"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={Attendance}
        options={{
          tabBarLabel: "Attendance",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="percent" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
