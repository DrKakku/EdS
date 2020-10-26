import React, { useState } from "react";
import { TextInput, Button, View } from "react-native";
import styles from "./Theme";

const CreateNoteComponent = (props) => {
  const [newNoteText, setNewNoteText] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Add Note"
        style={styles.textInputStyles}
        autoCorrect={false}
        autoCapitalize="none"
        multiline={true}
        value={newNoteText}
        onChangeText={(currentText) => {
          setNewNoteText(currentText);
        }}
      />
      <Button
        title={"Create Note"}
        onPress={() => {
          props.onCreateButtonPress(newNoteText);
          setNewNoteText("");
        }}
      />
    </View>
  );
};

export default CreateNoteComponent;
