import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class EmailScreen extends React.Component {
  // static navigationOptions = {
  //   title: "Email Screen"
  // };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("name", "Email Message")
    };
  };

  render() {
    const { navigation } = this.props;

    const name = navigation.getParam("name", "No Name");

    console.log(name);

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>This Is The Email Page</Text>
            <Text style={styles.getStartedText}>{this.props.name}</Text>
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
