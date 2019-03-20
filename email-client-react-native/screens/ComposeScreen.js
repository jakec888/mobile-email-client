import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Platform,
  Alert
} from "react-native";

import { Icon } from "expo";

export default class ComposeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "jaconjcondes@gmail.com",
      to: "",
      subject: "",
      message: ""
    };
  }

  static navigationOptions = {
    title: "Compose Email"
  };

  sendEmail = () => {
    Alert.alert(
      "Send Email",
      "Are you sure you want to send?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Send",
          onPress: () => {
            console.log("Sending...");
            this.setState({ to: "", subject: "", message: "" });
          }
        }
      ],
      { cancelable: false }
    );
  };

  deleteEmail = () => {
    Alert.alert(
      "Delete Email",
      "Are you sure you want to delete?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
            this.setState({ to: "", subject: "", message: "" });
          }
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={this.deleteEmail}
            style={styles.trash}
            underlayColor="#dddd"
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-trash" : "md-trash"}
              color="#2f95dc"
              size={26}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.sendEmail}
            style={styles.trash}
            underlayColor="#dddd"
          >
            <Icon.Ionicons
              name={Platform.OS === "ios" ? "ios-send" : "md-send"}
              color="#2f95dc"
              size={26}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.fromContainer}>
          <Text style={styles.inputText}>From: {this.state.from}</Text>
        </View>
        <View style={styles.toContainer}>
          <Text style={styles.toTitle}>To: </Text>
          <TextInput
            style={styles.toInput}
            onChangeText={text => this.setState({ to: text })}
            value={this.state.to}
          />
        </View>
        <View style={styles.subjectContainer}>
          <Text style={styles.subjectTitle}>Subject: </Text>
          <TextInput
            style={styles.subjectInput}
            onChangeText={text => this.setState({ subject: text })}
            value={this.state.subject}
          />
        </View>
        <View style={styles.messageContainer}>
          <TextInput
            placeholder="Compose Email"
            style={styles.messageInput}
            multiline={true}
            numberOfLines={21}
            onChangeText={text => this.setState({ message: text })}
            value={this.state.message}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonContainer: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  trash: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10
  },
  fromContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderBottomColor: "#DDDDDD",
    borderWidth: 1,
    paddingLeft: 5,
    paddingBottom: 10,
    paddingTop: 10
  },
  inputText: {
    fontSize: 21,
    color: "#2f95dc",
    lineHeight: 21,
    textAlign: "left"
  },
  toContainer: {
    flexDirection: "row",
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderBottomColor: "#DDDDDD",
    borderWidth: 1,
    paddingLeft: 5,
    paddingBottom: 10,
    paddingTop: 10
  },
  toTitle: {
    fontSize: 21,
    color: "#2f95dc"
  },
  toInput: {
    fontSize: 21,
    color: "#2f95dc",
    width: "100%"
  },
  subjectContainer: {
    flexDirection: "row",
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderBottomColor: "#DDDDDD",
    borderWidth: 1,
    paddingLeft: 5,
    paddingBottom: 10,
    paddingTop: 10
  },
  subjectTitle: {
    fontSize: 21,
    color: "#2f95dc"
  },
  subjectInput: {
    fontSize: 21,
    color: "#2f95dc",
    width: "100%"
  },
  messageContainer: {
    padding: 5,
    flexDirection: "row",
    height: "100%"
  },
  messageInput: {
    fontSize: 21,
    color: "#2f95dc",
    width: "100%",
    height: "100%"
  }
});
