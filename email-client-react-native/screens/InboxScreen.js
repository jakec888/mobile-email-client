import React from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";

export default class InboxScreen extends React.Component {
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
          folder: "inbox",
          sent_from: "Quinn <quin@gmail.com>",
          sent_to: "Jake <jaconjcondes@gmail.com>",
          subject: "This is the Second Email",
          date: "2019-03-14T21:22:54.097Z",
          plain: "This is the second email body",
          html: "<p>This is the second email body</p>"
        },
        {
          message_id: 3,
          folder: "inbox",
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
    title: "Inbox"
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            {this.state.emails.map(function(e, i) {
              return (
                <View key={i}>
                  <Button
                    title={e.subject}
                    onPress={() =>
                      navigate("Email", {
                        message_id: e.message_id,
                        subject: e.subject,
                        folder: e.folder,
                        sent_from: e.sent_from,
                        sent_to: e.sent_to,
                        date: e.date,
                        plain: e.plain,
                        html: e.html
                      })
                    }
                  />
                </View>
              );
            })}
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
            <Text style={styles.getStartedText}>This Is The Inbox</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});
