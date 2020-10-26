import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useBackHandler } from "@react-native-community/hooks";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./src/Dashboard";
import Profile from "./src/Profile";
import NotesScreenComponent from "./src/Notes/NotesScreenComponent";
import Task from "./src/Task/TaskComponent";
import Attendance from "./src/Attendance/AttendanceComponent";

import Login from "./components/login";
import Signup from "./components/signup";

const Tab = createMaterialBottomTabNavigator();

function MyTab() {
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

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Signup" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ title: "Login" }, { headerLeft: null })}
      />
      <Stack.Screen
        name="Hey"
        component={MyTab}
        options={({ title: "Welcome, Rahul" }, { headerLeft: null })}
      />
    </Stack.Navigator>
  );
}

/*export default function App() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}*/

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
