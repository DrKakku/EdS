import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Text,
  View,
  Button,
  FlatList,
} from "react-native";
import Elevation from "react-native-elevation";

import InputTask from "./textInp";
import GoalItem from "./goalItem";



export default function Start() {
  const [TaskState, setTaskState] = useState(false);
  const [TaskState1, setTaskState1] = useState(false);
  const [BG, setBG] = useState();
  const taskStateHandler = () => {
    setTaskState(true);
  };

  const [TaskList, setTaskList] = useState([]);

  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  //Adding the task in the list
  const AddHandler = (Task) => {
    TaskList.push(Task);

    setTaskState(false);
  };

  const cancleHandler = () => {
    setTaskState(false);
  };

  

  const bgStyle = () => {
   
    
      const styleNBG = StyleSheet.create({
        screen: {
          height: "100%",
          width: "100%",
          backgroundColor: "#264653",
        },

        body: {
          height: "98%",
          width: "97%",
          justifyContent: "center",
          margin: "2%",
          marginBottom: "6%",
          backgroundColor: "#f5f3f4",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 30,
          alignSelf: "center",
        },
        textcol: {
          fontSize: 50,
          color: "#373a40",
        },
        themeCol: {
          color: "#19d3da",
          fontSize: 48,
          fontWeight: "bold",
        },
        task: {
          justifyContent: "center",
          alignItems: "center",
          minWidth: "90%",
          padding: 10,
          margin: 4,
          borderBottomColor: "grey",
          borderRadius: 30,
          backgroundColor: "#eeeeee",
          ...Elevation[3],
        },
      });
      return styleNBG;
    
  };

  return (
   
      <View style={bgStyle().screen}>
        {/* // Body */}
        <View style={bgStyle().body}>
          <View style={styles.header}>
            
              {/* //text */}
              <View style={{ ...Elevation[1] }}>
                <Text style={bgStyle().textcol}>
                  {" "}
                  S<Text style={bgStyle().themeCol}>uch</Text>i
                </Text>
              </View>
            

            {/* //input text and button container */}
            <View>
              <View>
                <InputTask
                  bgStyle={bgStyle()}
                  onAdd={AddHandler}
                  onCancel={cancleHandler}
                  VisitState={TaskState}
                />
              </View>

              <View style={styles.button}>
                <Button
                  color={bgStyle().themeCol.color}
                  title="Tap me to Remember"
                  onPress={taskStateHandler}
                />
              </View>
            </View>
          </View>

          {/* List output*/}
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item, index) => item.Key}
              data={TaskList}
              renderItem={(itemData) => (
                <GoalItem
                  BGstyle={bgStyle()}
                  id={itemData.item.Key}
                  color={itemData.item.Color}
                  desc={itemData.item.description}
                  startDate={itemData.item.startDate}
                  endDate={itemData.item.endDate}
                  title={itemData.item.task}
                />
              )}
            />
          </View>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingTop: "40%",
  },

  list: {
    marginTop: "5%",
    flexDirection: "column-reverse",
    borderTopColor: "#373a40",
    height: "85%",
    marginBottom: "20%",
  },
  modal: {
    height: "20%",
  },
  button: {
    borderRadius: 40,
    fontSize: 40,
    elevation: 20,
    ...Elevation[1],
  },
});
