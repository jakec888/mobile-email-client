import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform
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
      html: ""
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
    this.setState({
      replying: !this.state.replying
    });
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
        </View>
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
  }
});
