import React, { useState } from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import SingleNoteSummaryComponent from "./SingleNoteSummaryComponent";
import CreateNoteComponent from "./CreateNoteComponent";

function NotesScreenComponent() {
  const [data, setData] = useState([]);

  const addNewNote = (text) => {
    if (text.length > 0) {
      setData([{ text: text, date: new Date() }, ...data]);
    } else {
      Alert.alert(
        "Not Allowed :(",
        "Enter some text!",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.viewProperties}>
      <CreateNoteComponent onCreateButtonPress={(text) => addNewNote(text)} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listProperties}
        data={data}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <SingleNoteSummaryComponent
              myNoteDate={item.date}
              myNoteText={item.text}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewProperties: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textProperties: {
    fontSize: 24,
  },
  textViewStyle: {
    height: 150,
    width: 150,
    margin: 10,
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

const randomBackground = () => {
  var red = Math.floor(Math.random() * 255); // 123
  var green = Math.floor(Math.random() * 255); // 45
  var blue = Math.floor(Math.random() * 255); // 43

  // String Interpolation
  // In a string -> insert a value of some other data type
  // ""  ''  ``

  return `rgb(${red}, ${green}, ${blue})`; // rgb(123, 45, 43)
};

export default NotesScreenComponent;
