import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
// import HomeScreen from "../screens/HomeScreen";
// import LinksScreen from "../screens/LinksScreen";
// import SettingsScreen from "../screens/SettingsScreen";
import InboxScreen from "../screens/InboxScreen";
import ComposeScreen from "../screens/ComposeScreen";
import AllMailScreen from "../screens/AllMailScreen";

// const HomeStack = createStackNavigator({
//   Home: HomeScreen
// });

// HomeStack.navigationOptions = {
//   tabBarLabel: "Home",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-information-circle${focused ? "" : "-outline"}`
//           : "md-information-circle"
//       }
//     />
//   )
// };

// const LinksStack = createStackNavigator({
//   Links: LinksScreen
// });

// LinksStack.navigationOptions = {
//   tabBarLabel: "Links",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-link" : "md-link"}
//     />
//   )
// };

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: "Settings",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-options" : "md-options"}
//     />
//   )
// };

const InboxStack = createStackNavigator({
  Inbox: InboxScreen
});

InboxStack.navigationOptions = {
  tabBarLabel: "Inbox",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
    />
  )
};

const ComposeStack = createStackNavigator({
  Compose: ComposeScreen
});

ComposeStack.navigationOptions = {
  tabBarLabel: "Compose",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-create" : "md-create"}
    />
  )
};

const AllMailStack = createStackNavigator({
  AllMail: AllMailScreen
});

AllMailStack.navigationOptions = {
  tabBarLabel: "All Mail",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list-box" : "md-list-box"}
    />
  )
};

export default createBottomTabNavigator({
  // HomeStack,
  // LinksStack,
  // SettingsStack,
  InboxStack,
  ComposeStack,
  AllMailStack
});
