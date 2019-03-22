import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  TextInput,
  Alert
} from "react-native";
import { Icon } from "expo";
import HTMLView from "react-native-htmlview";

import moment from "moment";

export default class InboxEmailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replying: false,
      info: false,
      subject: "",
      folder: "",
      sent_from: "",
      sent_to: "",
      date: "",
      plain: "",
      html: "",
      replyFrom: "jaconjcondes@gmail.com",
      replyTo: "",
      replySubject: "",
      replyMessage: ""
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("subject", "Email Message")
    };
  };

  componentDidMount() {
    const { navigation } = this.props;

    const subject = navigation.getParam("subject", "No Subject");
    const folder = navigation.getParam("folder", "Not In A Folder");
    const sent_from = navigation.getParam("sent_from", "No Sent From Address");
    const sent_to = navigation.getParam("sent_to", "No Sent To Address");
    const date = navigation.getParam("date", "No Date");
    const plain = navigation.getParam("plain", null);
    const html = navigation.getParam("html", null);

    this.setState({
      subject,
      folder,
      sent_from,
      sent_to,
      date,
      plain,
      html
    });
  }

  getInfo = () => {
    this.setState({
      info: !this.state.info
    });
  };

  replyBack = () => {
    console.log("Replying");

    this.setState({
      replying: !this.state.replying
    });
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
            this.setState({
              replying: false,
              replyTo: "",
              replySubject: "",
              replyMessage: ""
            });
          }
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {this.state.info ? (
          <View>
            <Text style={styles.info}>From: {this.state.sent_from}</Text>
            <Text style={styles.info}>To: {this.state.sent_to}</Text>
            <Text style={styles.info}>
              Date: {moment(this.state.date).format("LLLL")}
            </Text>
            <Text style={styles.info}>Folder: {this.state.folder.toUpperCase()}</Text>
          </View>
        ) : (
          <View>
            {this.state.html ? (
              <HTMLView value={this.state.html} stylesheet={styles} />
            ) : (
              <Text style={styles.message}>{this.state.plain}</Text>
            )}
          </View>
        )}
        <View style={styles.emailMenu}>
          <View style={styles.infoButton}>
            <TouchableHighlight onPress={this.getInfo} underlayColor="#dddd">
              {!this.state.info ? (
                <Icon.Ionicons
                  name={
                    Platform.OS === "ios"
                      ? "ios-information-circle-outline"
                      : "md-information-circle-outline"
                  }
                  color="#2f95dc"
                  size={26}
                />
              ) : (
                <Icon.Ionicons
                  name={Platform.OS === "ios" ? "ios-close-circle" : "md-close-circle"}
                  color="red"
                  size={26}
                />
              )}
            </TouchableHighlight>
          </View>
          <View style={styles.replyButton}>
            <TouchableHighlight onPress={this.replyBack} underlayColor="#dddd">
              {!this.state.replying ? (
                <Icon.Ionicons
                  name={Platform.OS === "ios" ? "ios-undo" : "md-undo"}
                  color="#2f95dc"
                  size={26}
                />
              ) : (
                <Icon.Ionicons
                  name={Platform.OS === "ios" ? "ios-trash" : "md-trash"}
                  color="red"
                  size={26}
                />
              )}
            </TouchableHighlight>
          </View>
          {this.state.replying ? (
            <View style={styles.replySend}>
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
          ) : null}
        </View>
        {this.state.replying ? (
          <View style={styles.replyContainer}>
            <View style={styles.fromContainer}>
              <Text style={styles.inputText}>From: {this.state.replyFrom}</Text>
            </View>
            <View style={styles.toContainer}>
              <Text style={styles.toTitle}>To: </Text>
              <TextInput
                style={styles.toInput}
                onChangeText={text => this.setState({ replyTo: text })}
                value={this.state.replyTo}
              />
            </View>
            <View style={styles.subjectContainer}>
              <Text style={styles.subjectTitle}>Subject: </Text>
              <TextInput
                style={styles.subjectInput}
                onChangeText={text => this.setState({ replySubject: text })}
                value={this.state.replySubject}
              />
            </View>
            <View style={styles.messageContainer}>
              <TextInput
                placeholder="Compose Email"
                style={styles.messageInput}
                multiline={true}
                numberOfLines={21}
                onChangeText={text => this.setState({ replyMessage: text })}
                value={this.state.replyMessage}
              />
            </View>
          </View>
        ) : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    marginRight: 15
  },
  emailMenu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 10
  },
  infoButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  replyButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  replySend: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 10
  },
  info: {
    fontSize: 21,
    color: "#2f95dc"
  },
  message: {
    fontSize: 34,
    color: "#2f95dc"
  },
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
    backgroundColor: "#fff"
  },
  fromContainer: {
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
    height: "100%",
    marginBottom: 100
  },
  messageInput: {
    fontSize: 21,
    color: "#2f95dc",
    width: "100%",
    height: "100%"
  }
});
