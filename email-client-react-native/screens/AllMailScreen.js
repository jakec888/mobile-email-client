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
          date: "2019-04-08T20:00:23.198Z",
          plain: "This is the second email body",
          html: "<p>This is the second email body</p>"
        },
        {
          message_id: 3,
          folder: "draft",
          sent_from: "John <John@gmail.com>",
          sent_to: "Jake <jaconjcondes@gmail.com>",
          subject: "HTML Ipsum Presents",
          date: "2019-05-26T18:22:54.097Z",
          plain: `HTML Ipsum Presents Pellentesque habitant morbi tristique** senectus et netus et malesuada fames
          ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
          tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. _Aenean
          ultricies mi vitae est._ Mauris placerat eleifend leo. Quisque sit amet est et
          sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, "commodo
          vitae", ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
          condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec
          non enim in turpis pulvinar facilisis. Ut felis.
          
          ## Header Level 2
          
            1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            2. Aliquam tincidunt mauris eu risus.
          
          > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras
          in mi at felis aliquet congue. Ut a est eget ligula molestie gravida.
          Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est
          malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare
          est.
          
          ### Header Level 3
          
            * Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            * Aliquam tincidunt mauris eu risus.
          
          `,
          html: `<h1>HTML Ipsum Presents</h1><p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li></ul>`
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
                navigate("AllEmailScreen", {
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
    color: "#a9a9a9",
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
