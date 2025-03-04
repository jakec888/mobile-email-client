# Email-Client

<p align="center">
<img src="mobile-email-client.gif" />
</p>

##### Notes

- unfinished
- api not connected

# Serverless-Flask

## API

https://serverless.com/blog/flask-python-rest-api-serverless-lambda-dynamodb/#using-the-quick-start-template

The fastest way to a Flask application with [Serverless](https://github.com/serverless/serverless).

## Usage

```
$ npm install -g serverless
$ serverless install --url https://github.com/alexdebrie/serverless-flask --name my-flask-app
$ cd my-flask-app && npm run setup
<answer prompts>
$ serverless deploy
```

Once the deploy is complete, run `sls info` to get the endpoint:

```
$ sls info
Service Information
<snip>
endpoints:
  ANY - https://abc6defghi.execute-api.us-east-1.amazonaws.com/dev <-- Endpoint
  ANY - https://abc6defghi.execute-api.us-east-1.amazonaws.com/dev/{proxy+}
```

Copy paste into the browser, and _voila_!

## Local development

To develop locally, create a virtual environment and install the dependencies:

```
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

Then, run the app:

```
sls wsgi serve
 * Running on http://localhost:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
```

To update the app:

```
rm -rf __pycache__ file
sls deploy
```

Navigate to [localhost:5000](http://localhost:5000) to see the app running locally.

## Configuration

The `postsetup.js` prompt will walk you through some setup questions that may be
custom to the use case. This includes:

- Python runtime version;
- Whether you have Docker setup, which assists in packaging dependencies. For more info, check out [this post on managing the Python packages with Serverless](https://serverless.com/blog/serverless-python-packaging/);
- Whether you want to set up a custom domain that you own, rather than a random assigned one from AWS. For more details on that, look at [this post on setting up a custom domain with API Gateway and Serverless](https://serverless.com/blog/serverless-api-gateway-domain/).

# Create React Native App

**Note: This repository has been archived and the issue tracker for Create React Native App has moved to: https://github.com/expo/expo-cli/issues**

[![Backers on Open Collective](https://opencollective.com/create-react-native-app/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/create-react-native-app/sponsors/badge.svg)](#sponsors) [![npm version](https://badge.fury.io/js/create-react-native-app.svg)](https://badge.fury.io/js/create-react-native-app)

Create React Native apps with no build configuration.

- [Getting Started](#getting-started)

Once you're up and running with Create React Native App, visit [this tutorial](https://facebook.github.io/react-native/docs/tutorial.html) for more information on building apps with React Native.

**Note: Create React Native App has been merged with Expo CLI** You can now use `expo init` to create your project. See [Quick Start](https://docs.expo.io/versions/latest/) in the Expo documentation for instructions on getting started using Expo CLI.

The `create-react-native-app` command is provided for backwards compatibility.

If you created your app using `create-react-native-app`, it's already compatible with Expo CLI. See [upgrade instructions](https://github.com/react-community/create-react-native-app/blob/master/CHANGELOG.md#upgrading-from-1140-to-201).

## Quick Overview

Make sure you have Node v6 or later installed. No Xcode or Android Studio installation is required.

```sh
$ npm install -g expo-cli
$ expo init my-app
$ cd my-app/
$ npm start
```

The `npm start` command starts the Expo CLI server. You can now run the project on your phone by using the Expo app.

### Android

- Install the [Expo](https://expo.io) app on your Android device.
- Scan the QR code in your terminal from the Expo app to run the project on your phone.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

### iOS

- Install the [Expo](https://expo.io) app on your iOS device.
- Press 'e' in the terminal to send the app link to your email address or phone number. This link can be used to run your project from the Expo app.
- Alternatively you can press 's' in the terminal and sign in with an Expo account, and sign in with the same account in the Expo app: your projects will automatically appear in the "Projects" tab.

Expo CLI allows you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started.html) in React Native, as well as the [JavaScript APIs](https://docs.expo.io/versions/latest/sdk/index.html) that the Expo app provides.

## Sections

- [Getting Started](#getting-started)
- [Philosophy](#philosophy)
- [Support and Contact](#support-and-contact)
- [FAQs](#faqs)
- [Contributing](#contributing)

## Getting Started

### Installation

See [Installation](https://docs.expo.io/versions/latest/introduction/installation).

### Creating an App

To create a new app, run:

```sh
expo init
```

This will create a directory called `my-app` inside the current working directory. Inside `my-app`, this will generate the initial project structure and install all of its dependencies.

If you're familiar with React Native already, you won't find any `ios` or `android` directories in this project, just JavaScript. Once this installation is done, there are some commands you can run in the project directory:

#### `npm start`

Runs your app in development mode with an interactive prompt. To run it without a prompt, use the `--no-interactive` flag.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a **permanent** action. Please use a version control system, such as git, so you can revert back if necessary. An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Philosophy

- **Minimal "Time to Hello World"**: Create React Native App should reduce the setup time it takes to try building a mobile app to the absolute minimum, ideally on par with React web development (especially as seen with [Create React App](https://github.com/facebookincubator/create-react-app)).
- **Develop on Your Device**: It should be easy to develop on a physical device when you want to test how your app feels and responds to inputs.
- **One Build Tool**: If you just want to get started with React Native, you shouldn't need to install Xcode, Android Studio, NDKs, or mess with environment variables.
- **No Lock-In**: You can always "eject" to your own build setup if you need to write custom native code or modify how your app is built.

## Support and Contact

If you're having issues with Create React Native App, please make sure:

- The issue is not covered in the [Expo Docs](https://docs.expo.io/versions/latest/)
- There is not already an [open issue](https://github.com/expo/expo-cli/issues) for your particular problem

If you've checked the documentation and currently open issues, please either [open a new GitHub issue](https://github.com/expo/expo-cli/issues/new) or ask a question on [Expo forums](https://forums.expo.io/c/help). **Please do not DM or email project maintainers directly**, as it's very important that support takes place in public locations where others can benefit from the conversation.

## FAQs

### What API specification should I be looking at while developing?

Apps made with Create React Native App support everything in the Components and APIs sections of the [React Native Documentation](https://facebook.github.io/react-native/docs/getting-started.html).

Apps made with Create React Native App also support most of the JavaScript-to-Native APIs provided by the [Expo SDK](https://docs.expo.io/versions/latest/sdk/index.html), since they are loaded by the Expo app.

### What are the limitations of Create React Native App?

The main limitation of a Create React Native App project is that it must be written in pure JavaScript and not have any dependencies which rely on custom native code (i.e. ones which require running `react-native link` to work). This allows the projects to load directly on a phone without native compilation, and also means that it's not necessary to install or use Android Studio or Xcode.

### What if I want to write custom native code for my app?

If you're sure that you need custom native code, please read the [ejecting guide](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md).

### How do I get my app into the Play Store/App Store?

If you need to build IPAs and APKs for publishing to the App Store and/or Play Store, you can either eject (see above guide) and build them yourself using Xcode and Android Studio, or you can use a service like [Expo's standalone app builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) to publish your pure JS app.

## Contributing

From version v2.0.1, Create React Native App has been merged with Expo CLI.

Please see [Contributin to Expo CLI](https://github.com/expo/expo-cli/blob/master/CONTRIBUTING.md) in the Expo CLI monorepo for instructions on contributing to Expo CLI.
