import React from "react";
import { ScrollView, StyleSheet, View, Text, TextInput, Button } from "react-native";

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
    console.log("Send Email");
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.sendEmail}
            title="Delete"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.sendEmail}
            title="Send Email"
            accessibilityLabel="Learn more about this purple button"
          />
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
    flexDirection: "row",
    justifyContent: "space-between"
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
    padding: 5
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
    padding: 5
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
    padding: 5
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
    borderWidth: 1,
    padding: 5,
    flexDirection: "row",
    height: "100%"
  },
  messageInput: {
    fontSize: 21,
    color: "#2f95dc",
    width: "100%",
    height: "100  %"
  },
  sendButtonContainer: {
    color: "#841584",
    borderColor: "black",
    backgroundColor: "red"
  }
});
