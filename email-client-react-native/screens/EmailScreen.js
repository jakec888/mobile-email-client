import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HTMLView from "react-native-htmlview";

export default class EmailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("subject", "Email Message")
    };
  };

  render() {
    const { navigation } = this.props;

    const subject = navigation.getParam("subject", "No Subject");
    const folder = navigation.getParam("folder", "Not In A Folder");
    const sent_from = navigation.getParam("sent_from", "No Sent From Address");
    const sent_to = navigation.getParam("sent_to", "No Sent To Address");
    const date = navigation.getParam("date", "No Date");
    const plain = navigation.getParam("plain", null);
    const html = navigation.getParam("html", null);

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Subject: {subject}</Text>
            <Text style={styles.getStartedText}>Folder: {folder}</Text>
            <Text style={styles.getStartedText}>From: {sent_from}</Text>
            <Text style={styles.getStartedText}>To: {sent_to}</Text>
            <Text style={styles.getStartedText}>To: {date}</Text>
            {plain ? (
              <Text style={styles.getStartedText}>{plain}</Text>
            ) : (
              <HTMLView value={html} />
            )}
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
