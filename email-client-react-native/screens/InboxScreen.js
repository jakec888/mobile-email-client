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

  // WholeNews() {
  //   return this.state.emails.map(function(e, i) {
  //     return (
  //       <View key={i}>
  //         <Text>{e.name}</Text>
  //       </View>
  //     );
  //   });
  // }
  render() {
    const { navigate } = this.props.navigation;

    // const renObjData = this.state.emails.map(function(email, id) {
    //   return <Text key={id}>{email.name}</Text>;
    // });

    return (
      <View style={styles.container}>
        <Button
          title="Go Example Email Screen"
          onPress={() => navigate("Email", { name: "Jane" })}
        />

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            {/* {this.WholeNews()} */}
            {this.state.emails.map(function(e, i) {
              return (
                <View key={i}>
                  <Text>{e.subject}</Text>
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
    paddingTop: 30
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
