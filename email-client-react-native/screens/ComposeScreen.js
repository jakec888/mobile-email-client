import React from "react";
import { ScrollView, StyleSheet, View, Text, TextInput } from "react-native";
// TextInput
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

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
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
            style={styles.messageInput}
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "green",
    borderWidth: 1,
    padding: 5
  },
  inputText: {
    fontSize: 21,
    color: "#2f95dc",
    lineHeight: 21,
    textAlign: "left"
  },
  toContainer: {
    padding: 5,
    flexDirection: "row",
    borderColor: "green",
    borderWidth: 1
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
    padding: 5,
    flexDirection: "row",
    borderColor: "green",
    borderWidth: 1
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
    borderColor: "green",
    borderWidth: 1
  },
  messageTitle: {
    fontSize: 21,
    color: "#2f95dc"
  },
  messageInput: {
    fontSize: 21,
    color: "#2f95dc",
    width: "100%",
    height: "80%"
  }
});
