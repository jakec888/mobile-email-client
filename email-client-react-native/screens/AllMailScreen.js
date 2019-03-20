import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from "react-native";

import moment from "moment";

export default class AllMailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [
        {
          message_id: 1,
          folder: "inbox",
          sent_from: "Jake <jaconjcondes@gmail.com>",
          sent_to: "Quinn <quin@gmail.com>",
          subject: "This is the First Email",
          date: "2019-03-14T21:18:23.198Z",
          plain: "This is the first email body",
          html: "<p>This is the first email body</p>"
        },
        {
          message_id: 2,
          folder: "sent",
          sent_from: "Quinn <quin@gmail.com>",
          sent_to: "Jake <jaconjcondes@gmail.com>",
          subject: "This is the Second Email",
          date: "2019-03-14T21:22:54.097Z",
          plain: "This is the second email body",
          html: "<p>This is the second email body</p>"
        },
        {
          message_id: 3,
          folder: "draft",
          sent_from: "John <John@gmail.com>",
          sent_to: "Jake <jaconjcondes@gmail.com>",
          subject: "This is the Third Email",
          date: "2019-03-14T21:22:54.097Z",
          plain: "This is the third email body",
          html: "<p>This is the third email body</p>"
        }
      ]
    };
  }

  static navigationOptions = {
    title: "All Email"
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.emails}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.touchableEmail}
              key={item.message_id}
              onPress={() =>
                navigate("Email", {
                  message_id: item.message_id,
                  subject: item.subject,
                  folder: item.folder,
                  sent_from: item.sent_from,
                  sent_to: item.sent_to,
                  date: item.date,
                  plain: item.plain,
                  html: item.html
                })
              }
            >
              <View style={styles.emailContainer}>
                <View style={styles.emailMain}>
                  <Text style={styles.emailFolder}>{item.folder.toUpperCase()}</Text>
                  <Text style={styles.emailSubject}>{item.subject}</Text>
                  <Text style={styles.emailText}>
                    {item.plain.substring(0, 55) + "..."}
                  </Text>
                </View>
                <View style={styles.emailDate}>
                  <Text style={styles.emailSubject}>
                    {moment(item.date).format("MMM")}
                  </Text>
                  <Text style={styles.emailText}>{moment(item.date).format("Do")}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  emailContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  emailMain: {
    flexDirection: "column"
  },
  emailDate: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  emailFolder: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#2f95dc",
    lineHeight: 21,
    textAlign: "left"
  },
  emailSubject: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#2f95dc",
    lineHeight: 21,
    textAlign: "left"
  },
  emailText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2f95dc",
    lineHeight: 21,
    textAlign: "left"
  },
  touchableEmail: {
    backgroundColor: "#f8f8f8",
    padding: 10
  }
});
