import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import firebase from "../database/firebase";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin() {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          /*console.log(res);
          console.log("User logged-in successfully!");*/
          this.setState({
            isLoading: false,
            email: "",
            password: "",
          });
          this.props.navigation.navigate("Hey");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          autoCapitalize="none"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          maxLength={15}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => this.userLogin()}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            SignIn
          </Text>
        </TouchableOpacity>
        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          Don't have account? Click here to signup
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  loginText: {
    color: "#3740FE",
    marginTop: 25,
    textAlign: "center",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    width: "90%",
    height: 40,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: "",
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
});
