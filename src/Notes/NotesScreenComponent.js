import React, { useState } from "react";
import { FlatList, View, Alert } from "react-native";
import SingleNoteSummaryComponent from "./SingleNoteSummaryComponent";
import CreateNoteComponent from "./CreateNoteComponent";
import styles from "./Theme";

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

export default NotesScreenComponent;
